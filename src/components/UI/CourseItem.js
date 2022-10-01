import { Container } from 'react-bootstrap';
import classes from './CourseItem.module.css';

const CourseItem = (props) => {
  return (
    <div className={classes.item}>
      <h2>{props.title}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${props.video}`}
        allowFullScreen
      ></iframe>
      <div className={classes.row}>
        <p className={classes.heading}>Description:&nbsp;</p>
        <p>{props.description}</p>
      </div>
      <div className={classes.row}>
        <p className={classes.heading}>Price:&nbsp;</p>
        <p>${props.price}</p>
      </div>
      <div className={classes.row}>
        <p className={classes.heading}>Category:&nbsp;</p>
        <p>{props.category}</p>
      </div>
    </div>
  );
};

export default CourseItem;
