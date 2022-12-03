import Footer from '../Common/Footer';
import Header from '../Common/Header';
import CreateAccount from './CreateAccount';
import { getFirestore, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { storage } from '../../firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const db = getFirestore();
const auth = getAuth();
const metadata = {
  contentType: 'resumes/pdf',
};

const CreateAccountDisplay = () => {
  const createAccountHandler = async (
    nameValue,
    emailValue,
    passwordValue,
    reEnterPasswordValue,
    accountTypeValue,
    fileValue
  ) => {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(async (cred) => {
        sendEmailVerification(cred.user);
        const user = cred.user;

        const userValidation = accountTypeValue === 'student' ? true : false;

        const resumeRef = ref(storage, `resumes/${fileValue.name}`);
        await uploadBytes(resumeRef, fileValue, metadata);
          getDownloadURL(ref(storage, `resumes/${fileValue.name}`))
            .then(async (url) => {
              console.log(url);
              const docRef = doc(db, 'users', user.uid);
              await setDoc(docRef, {
                email: emailValue,
                password: passwordValue,
                reEnterPassword: reEnterPasswordValue,
                name: nameValue,
                accountType: accountTypeValue,
                createdAt: serverTimestamp(),
                userValidation: userValidation,
                resumeFile: url,
              });
              console.log("user added")
            })
            .catch((err) => {
              console.log(err.message)
            })
        console.log('image uploaded');

        console.log('user created', cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Header />
      <CreateAccount onCreateAccount={createAccountHandler} />
      <Footer />
    </div>
  );
};

export default CreateAccountDisplay;
