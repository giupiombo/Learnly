import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/use-input';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddCourse.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isPrice = (value) => value > 0;

const AddCourse = (props) => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescription,
  } = useInput(isNotEmpty);

  const {
    value: categoryValue,
    isValid: categoryIsValid,
    valueChangeHandler: categoryChangeHandler,
    reset: resetCategory,
  } = useInput(isNotEmpty);

  const {
    value: priceValue,
    isValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput(isPrice);

  const {
    value: videoValue,
    isValid: videoIsValid,
    hasError: videoHasError,
    valueChangeHandler: videoChangeHandler,
    inputBlurHandler: videoBlurHandler,
    reset: resetVideo,
  } = useInput(isNotEmpty);

  let navigate = useNavigate();

  let formIsValid = false;

  if (
    titleIsValid &&
    descriptionIsValid &&
    categoryIsValid &&
    priceIsValid &&
    videoIsValid
  ) {
    formIsValid = true;
  }

  const addCourseHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddCourse({
      title: titleValue,
      description: descriptionValue,
      category: categoryValue,
      price: priceValue,
      video: videoValue,
      //author: loggedUser.name
    });

    resetTitle();
    resetDescription();
    resetCategory();
    resetPrice();
    resetVideo();
  };

  const backHandler = () => {
    navigate('/myCourses');
  };

  const titleClasses = titleHasError ? classes.invalid : classes;
  const descriptionClasses = descriptionHasError ? classes.invalid : classes;
  const priceClasses = priceHasError ? classes.invalid : classes;
  const videoClasses = videoHasError ? classes.invalid : classes;

  return (
    <Card className={classes.input}>
      <h2>Add Course</h2>
      <form onSubmit={addCourseHandler}>
        <label htmlFor="title">Title</label>
        <input
          className={titleClasses}
          id="title"
          type="text"
          value={titleValue}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className={descriptionClasses}
          id="description"
          type="text"
          value={descriptionValue}
          onChange={descriptionChangeHandler}
          onBlur={descriptionBlurHandler}
        />
        <label htmlFor="category">Category</label>
        <select value={categoryValue} onChange={categoryChangeHandler}>
          <option value="null"></option>
          <option value="web-development">Web Development</option>
          <option value="mathematics">Mathematics</option>
          <option value="data-science">Data Science</option>
        </select>
        <label htmlFor="price">Price</label>
        <input
          className={priceClasses}
          id="price"
          type="number"
          min="1"
          value={priceValue}
          onChange={priceChangeHandler}
          onBlur={priceBlurHandler}
        />
        <label htmlFor="video">Video</label>
        <input
          className={videoClasses}
          id="video"
          type="text"
          value={videoValue}
          onChange={videoChangeHandler}
          onBlur={videoBlurHandler}
        />
        <Button
          disabled={!formIsValid}
          type="submit"
          onClick={addCourseHandler}
        >
          Add Course
        </Button>
        <button type="button" className={classes.text} onClick={backHandler}>
          Cancel
        </button>
      </form>
    </Card>
  );
};

export default AddCourse;
