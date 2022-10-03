import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user-context';
import classes from './HeaderStudent.module.css';

const HeaderStudent = () => {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const myCoursesHandler = () => {
    navigate('/StudentCourses');
  };

  const categoriesHandler = () => {
    navigate('/categories');
  };

  const logoutHandler = () => {
    setUser(null, null, null, null);
    navigate('/');
  };
  return (
    <header className={classes.header}>
      <h2>Learnly</h2>
      <button onClick={myCoursesHandler}>My Courses</button>
      <button onClick={categoriesHandler}>Categories</button>
      <button>Search bar goes here, should be very big</button>
      <button onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default HeaderStudent;
