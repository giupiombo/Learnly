import classes from './CourseItem.module.css';

const CourseItem = (props) => {
  return (
    <div className={classes.item}>
      <h2>Title: {props.title}</h2>
      <h3>Description: {props.description}</h3>
      <h4>Price: ${props.price}</h4>
      <h5>Category: {props.category}</h5>
    </div>
  );
};

export default CourseItem;
