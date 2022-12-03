import { useContext, useState } from 'react';
import UserContext from '../../../context/user-context';
import useInput from '../../../hooks/use-input';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import classes from './EditCourse.module.css';
import { useNavigate } from 'react-router-dom';

const isNotEmpty = (value) => value.trim() !== '';
const isPrice = (value) => value > 0;

const EditCourse = (props) => {
  const [video, setVideo] = useState('');
  const [image, setImage] = useState('');

  const { loggedUser } = useContext(UserContext);

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

  let navigate = useNavigate();

  let formIsValid = false;

  if (
    titleIsValid &&
    descriptionIsValid &&
    categoryIsValid &&
    priceIsValid
  ) {
    formIsValid = true;
  }

  const editCourseHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const name = loggedUser.name;

    props.onEditCourse(
      titleValue,
      descriptionValue,
      categoryValue,
      priceValue,
      video,
      image,
      name,
    );

    resetTitle();
    resetDescription();
    resetCategory();
    resetPrice();
  };

  const backHandler = () => {
    navigate('/professorCourses');
  };

  const videoChangeHandler = (e) => {
    setVideo(e.target.files[0]);
  }

  const imageChangeHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const titleClasses = titleHasError ? classes.invalid : classes;
  const descriptionClasses = descriptionHasError ? classes.invalid : classes;
  const priceClasses = priceHasError ? classes.invalid : classes;

  return (
    <Card className={classes.input}>
      <h2>Edit Course</h2>
      <form onSubmit={editCourseHandler}>
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
          id="video"
          type="file"
          onChange={videoChangeHandler}
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          onChange={imageChangeHandler}
        />
        <Button
          disabled={!formIsValid}
          type="submit"
          onClick={editCourseHandler}
        >
          Edit Course
        </Button>
        <button type="button" className={classes.text} onClick={backHandler}>
          Cancel
        </button>
      </form>
    </Card>
  );
};

export default EditCourse;
