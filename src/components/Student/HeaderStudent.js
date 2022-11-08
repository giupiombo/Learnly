import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user-context';
import classes from './HeaderStudent.module.css';
import firebaseConfig from '../../firebase-config';
import {
  getFirestore,
  addDoc,
  serverTimestamp,
  collection,
} from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import SearchBar from '../UI/SearchBar';

const auth = getAuth();

const HeaderStudent = () => {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const homeHandler = () => {
    navigate('/home');
  };

  const myCoursesHandler = () => {
    navigate('/StudentCourses');
  };

  const categoriesHandler = () => {
    navigate('/categories');
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
      <button onClick={myCoursesHandler}>My Courses</button>
      <button onClick={categoriesHandler}>Categories</button>
      {/* <button>Search bar goes here, should be very big</button> */}
      <SearchBar />
      <button onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default HeaderStudent;
