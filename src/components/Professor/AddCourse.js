import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddCourse.module.css';

const AddCourse = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredVideo, setEnteredVideo] = useState('');

  let navigate = useNavigate();

  const addCourseHandler = (event) => {
    event.preventDefault();

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPrice.trim().length === 0 ||
      enteredVideo.trim().length === 0
    ) {
      return;
    }

    props.onAddCourse(
      enteredTitle,
      enteredDescription,
      enteredCategory,
      enteredPrice,
      enteredVideo
    );

    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredCategory('');
    setEnteredPrice('');
    setEnteredVideo('');
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const videoChangeHandler = (event) => {
    setEnteredVideo(event.target.value);
  };

  const backHandler = () => {
    navigate('/myCourses');
  };

  return (
    <Card className={classes.input}>
      <h2>Add Course</h2>
      <form onSubmit={addCourseHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
        <label htmlFor="category">Category</label>
        <select value={enteredCategory} onChange={categoryChangeHandler}>
          <option value="web-development">Web Development</option>
          <option value="mathematics">Mathematics</option>
          <option value="data-science">Data Science</option>
        </select>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          min="1"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <label htmlFor="video">Video</label>
        <input
          id="video"
          type="text"
          value={enteredVideo}
          onChange={videoChangeHandler}
        />
        <Button type="submit" onClick={addCourseHandler}>
          Add Course
        </Button>
        <button className={classes.text} onClick={backHandler}>
          Cancel
        </button>
      </form>
    </Card>
  );
};

export default AddCourse;
