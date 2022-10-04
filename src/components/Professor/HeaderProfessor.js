import { useNavigate } from 'react-router-dom';
import classes from './HeaderProfessor.module.css';
import UserContext from '../../context/user-context';
import { useContext } from 'react';

const HeaderProfessor = () => {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

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
      <h2>Learnly</h2>
      <span></span>
      <button onClick={myCoursesHandler}>My Courses</button>
      <button onClick={addCoursesHandler}>Add Courses</button>
      <button onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default HeaderProfessor;
