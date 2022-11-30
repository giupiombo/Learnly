import { useNavigate } from 'react-router-dom';
import classes from './HeaderProfessor.module.css';
import UserContext from '../../context/user-context';
import { useContext } from 'react';
import firebaseConfig from '../../firebase-config';
import {
  getFirestore,
  addDoc,
  serverTimestamp,
  collection,
} from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

const HeaderProfessor = () => {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const homeHandler = () => {
    navigate('/professorCourses');
  };

  const myCoursesHandler = () => {
    navigate('/professorCourses');
  };

  const addCoursesHandler = () => {
    navigate('/addCourse');
  };

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log('user logged out');
        setUser(null, null, null, null);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
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
