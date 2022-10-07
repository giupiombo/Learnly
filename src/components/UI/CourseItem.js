import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedCourseContext from '../../context/selected-course-context';
import classes from './CourseItem.module.css';

const CourseItem = (props) => {
  const { setCourse } = useContext(SelectedCourseContext);
  let navigate = useNavigate();

  const clickHandler = () => {
    setCourse(
      props.title,
      props.author,
      props.price,
      props.description,
      props.category,
      props.video
    );
    navigate('/selectedCourse');
  };

  return (
    <div className={classes.item} onClick={clickHandler}>
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
        <p className={classes.heading}>Price:&nbsp;</p>
        <p>${parseFloat(props.price).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CourseItem;
