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
        <p className={`${classes.heading} ${classes.noMargin}`}>
          Author:&nbsp;
        </p>
        <p className={classes.noMargin}>{props.author}</p>
      </div>
      <div className={classes.row}>
        <p className={`${classes.heading} ${classes.noMargin}`}>
          Description:&nbsp;
        </p>
        <p className={classes.noMargin}>{props.description}</p>
      </div>
      <div className={classes.row}>
        <p className={`${classes.heading} ${classes.noMargin}`}>Price:&nbsp;</p>
        <p className={classes.noMargin}>
          ${parseFloat(props.price).toFixed(2)}
        </p>
      </div>
      <div className={classes.row}>
        <p className={classes.heading}>Category:&nbsp;</p>
        <p>{props.category}</p>
      </div>
    </div>
  );
};

export default CourseItem;
