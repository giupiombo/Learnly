import { useContext } from 'react';
import UserContext from '../../context/user-context';
import HeaderProfessor from '../Professor/HeaderProfessor';
import HeaderStudent from '../Student/HeaderStudent';
import Card from '../UI/Card';
import Footer from './Footer';
import classes from './SelectedCourse.module.css';
import Button from '../UI/Button';
import SelectedCourseContext from '../../context/selected-course-context';
import { useNavigate } from 'react-router-dom';
import UserCourseContext from '../../context/user-courses-context';

const SelectedCourse = () => {
  const { loggedUser } = useContext(UserContext);
  const { selectedCourse } = useContext(SelectedCourseContext);
  const { userCourses } = useContext(UserCourseContext);

  let navigate = useNavigate();

  const courseIds = [];
  for (const userCourse of userCourses) {
    if (loggedUser.id === userCourse.student) {
      courseIds.push(userCourse.course);
    }
  }

  const buttonHandler = () => {
    if (loggedUser.accountType === 'professor') {
      navigate('/editCourse');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <>
      {loggedUser.accountType === 'professor' ? (
        <HeaderProfessor />
      ) : (
        <HeaderStudent />
      )}
      <Card className={classes.course}>
        <h2>{selectedCourse.title}</h2>
        <img src={selectedCourse.image} alt="new" />
        {loggedUser.accountType === 'professor' && (
          <iframe src={selectedCourse.video} allowFullScreen></iframe>
        )}
        {loggedUser.accountType === 'student' &&
          courseIds.includes(selectedCourse.id) && (
            <iframe src={selectedCourse.video} allowFullScreen></iframe>
          )}
        <div className={classes.row}>
          <p className={`${classes.heading} ${classes.noMargin}`}>
            Author:&nbsp;
          </p>
          <p className={classes.noMargin}>{selectedCourse.author}</p>
        </div>
        <div className={classes.row}>
          <p className={`${classes.heading} ${classes.noMargin}`}>
            Description:&nbsp;
          </p>
          <p className={classes.noMargin}>{selectedCourse.description}</p>
        </div>
        <div className={classes.row}>
          <p className={classes.heading}>Price:&nbsp;</p>
          <p>${parseFloat(selectedCourse.price).toFixed(2)}</p>
        </div>{' '}
        {!courseIds.includes(selectedCourse.id) && (
          <Button onClick={buttonHandler}>
            {loggedUser.accountType === 'professor' ? `Edit` : `Buy`}
          </Button>
        )}
      </Card>
      <Footer />
    </>
  );
};

export default SelectedCourse;
