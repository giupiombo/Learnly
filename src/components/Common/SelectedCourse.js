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

const SelectedCourse = (props) => {
  const { loggedUser } = useContext(UserContext);
  const { selectedCourse } = useContext(SelectedCourseContext);

  let navigate = useNavigate();

  const buttonHandler = () => {
    if (loggedUser.accountType === 'professor') {
      navigate('/editCourse');
    } else {
      navigate('/buyCourse');
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
        <iframe
          src={`https://www.youtube.com/embed/${selectedCourse.video}`}
          allowFullScreen
        ></iframe>
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
        <Button onClick={buttonHandler}>
          {loggedUser.accountType === 'professor' ? `Edit` : `Buy`}
        </Button>
      </Card>
      <Footer />
    </>
  );
};

export default SelectedCourse;
