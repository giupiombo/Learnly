import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedCourseContext from '../../context/selected-course-context';
import UserCourseContext from '../../context/user-courses-context';
import classes from './CourseItem.module.css';

const CourseItem = (props) => {
  const { setCourse } = useContext(SelectedCourseContext);
  const { userCourses } = useContext(UserCourseContext);

  let navigate = useNavigate();

  const courseIds = [];
  for (const userCourse of userCourses) {
    courseIds.push(userCourse.course);
  }

  console.log(userCourses);
  console.log(courseIds);

  const clickHandler = () => {
    setCourse(
      props.id,
      props.title,
      props.author,
      props.price,
      props.description,
      props.category,
      props.video,
      props.image
    );
    navigate('/selectedCourse');
  };

  return (
    <div className={classes.item} onClick={clickHandler}>
      <h2>{props.title}</h2>
      {props.type === 'categories' && !courseIds.includes(props.id) ? (
        <img src={`${props.image}`} alt="new" />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${props.video}`}
          allowFullScreen
        ></iframe>
      )}
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
