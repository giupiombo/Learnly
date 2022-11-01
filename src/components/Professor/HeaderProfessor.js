import { useNavigate } from 'react-router-dom';
import classes from './HeaderProfessor.module.css';
import UserContext from '../../context/user-context';
import { useContext } from 'react';

const HeaderProfessor = () => {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const homeHandler = () => {
    navigate('/home');
  };

  const myCoursesHandler = () => {
    navigate('/professorCourses');
  };

  const addCoursesHandler = () => {
    navigate('/addCourse');
  };

  const logoutHandler = () => {
    setUser(null, null, null, null);
    navigate('/');
  };
  return (
    <header className={classes.header}>
      <button className={classes.title} onClick={homeHandler}>
        Learnly
      </button>
      <span></span>
      <button onClick={myCoursesHandler}>My Courses</button>
      <button onClick={addCoursesHandler}>Add Courses</button>
      <button onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default HeaderProfessor;
