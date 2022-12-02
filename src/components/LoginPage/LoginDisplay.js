import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user-context';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Login from './Login';
import firebaseConfig from '../../firebase-config';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();
const colRef = collection(db, 'users');

const LoginDisplay = () => {
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const loginHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (cred) => {
        const user = cred.user;
        console.log('user logged in', cred.user);
        console.log(user.uid);

        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        const account = docSnap.data();
        const accountId = user.uid;

        setUser(
          accountId,
          account.name,
          account.email,
          account.password,
          account.accountType
        );

        if (account.userValidation) {
          if (account.accountType === 'student') {
            navigate('/studentCourses');
          } else {
            navigate('/professorCourses');
          }
        }
      })

      .catch((err) => {
        console.log(err.message);
      });
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
