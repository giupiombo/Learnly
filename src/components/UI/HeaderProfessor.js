import { useNavigate } from 'react-router-dom';
import classes from './HeaderProfessor.module.css';

const HeaderProfessor = () => {
  let navigate = useNavigate();
  const myCoursesHandler = () => {
    navigate('/myCourses');
  };

  const addCoursesHandler = () => {
    navigate('/addCourse');
  };

  const logoutHandler = () => {
    navigate('/');
  };
  return (
    <header className={classes.header}>
      <h2>Learnly</h2>
      <span></span>
      <button onClick={myCoursesHandler}>My Courses</button>
      <button onClick={addCoursesHandler}>Add Courses</button>
      <button onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default HeaderProfessor;
