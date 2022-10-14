import { useContext } from 'react';
import SelectedCourseContext from '../../../context/selected-course-context';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import classes from './EditCourse.module.css';

const EditCourse = () => {
  const { selectedCourse } = useContext(SelectedCourseContext);

  return (
    <Card className={classes.input}>
      <h2>Edit Course</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input
          // className={titleClasses}
          id="title"
          type="text"
          value={selectedCourse.title}
          // onChange={titleChangeHandler}
          // onBlur={titleBlurHandler}
        />
        <label htmlFor="description">Description</label>
        <textarea
          // className={descriptionClasses}
          id="description"
          type="text"
          value={selectedCourse.description}
          // onChange={descriptionChangeHandler}
          // onBlur={descriptionBlurHandler}
        />
        <label htmlFor="category">Category</label>
        <select value={selectedCourse.category}>
          <option value="null"></option>
          <option value="web-development">Web Development</option>
          <option value="mathematics">Mathematics</option>
          <option value="data-science">Data Science</option>
        </select>
        <label htmlFor="price">Price</label>
        <input
          // className={priceClasses}
          id="price"
          type="number"
          min="1"
          value={selectedCourse.price}
          // onChange={priceChangeHandler}
          // onBlur={priceBlurHandler}
        />
        <label htmlFor="video">Video</label>
        <input
          // className={videoClasses}
          id="video"
          type="text"
          value={selectedCourse.video}
          // onChange={videoChangeHandler}
          // onBlur={videoBlurHandler}
        />
        <label htmlFor="image">Image</label>
        <input
          // className={imageClasses}
          id="image"
          type="text"
          value={selectedCourse.image}
          // onChange={imageChangeHandler}
          // onBlur={imageBlurHandler}
        />
        <Button
          // disabled={!formIsValid}
          type="submit"
          // onClick={addCourseHandler}
        >
          Edit Course
        </Button>
        {/* <button type="button" className={classes.text} onClick={backHandler}>
          Cancel
        </button> */}
      </form>
    </Card>
  );
};

export default EditCourse;
