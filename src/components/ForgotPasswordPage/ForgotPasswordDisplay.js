import Footer from '../Common/Footer';
import Header from '../Common/Header';
import ForgotPassword from './ForgotPassword';
import firebaseConfig from '../../firebase-config';
import {
  getFirestore,
  addDoc,
  serverTimestamp,
  collection,
} from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();

const ForgotPasswordDisplay = () => {
  const forgotPasswordHandler = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((cred) => {
        console.log('sent password reset', cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Header />
      <ForgotPassword onForgotPassword={forgotPasswordHandler} />
      <Footer />
    </div>
  );
};

export default ForgotPasswordDisplay;
