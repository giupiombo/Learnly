import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user-context';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Login from './Login';
import firebaseConfig from '../../firebase-config';
import {
  getFirestore,
  addDoc,
  serverTimestamp,
  collection,
} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();
const colRef = collection(db, 'users');

const LoginDisplay = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  //
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        'https://react-http-bb74b-default-rtdb.firebaseio.com/accounts.json'
      );

      if (!response.ok) {
        throw new Error('Invalid Account!');
      }

      const responseData = await response.json();

      const accounts = [];

      for (const key in responseData) {
        accounts.push({
          name: responseData[key].user.name,
          email: responseData[key].user.email,
          password: responseData[key].user.password,
          accountType: responseData[key].user.accountType,
        });
      }

      setUsers(accounts);
      setIsLoading(false);
    };

    fetchUsers().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const loginHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('user logged in', cred.user);
        // if (users[user].accountType === 'student') {
        // navigate('/studentCourses');
        // } else {
        navigate('/professorCourses');
        // }
        // setUser(
        //       users[user].name,
        //       users[user].email,
        //       users[user].password,
        //       users[user].accountType
        //     );
      })
      .catch((err) => {
        console.log(err.message);
      });

    // for (const user in users) {
    //   if (users[user].email === email && users[user].password === password) {
    //     if (users[user].accountType === 'student') {
    //       navigate('/studentCourses');
    //     } else {
    //       navigate('/professorCourses');
    //     }
    //     navigate('/home');
    //     setUser(
    //       users[user].name,
    //       users[user].email,
    //       users[user].password,
    //       users[user].accountType
    //     );
    //   }
    // }
  };

  return (
    <div>
      <Header />
      <Login onLogin={loginHandler} />
      <Footer />
    </div>
  );
};

export default LoginDisplay;
