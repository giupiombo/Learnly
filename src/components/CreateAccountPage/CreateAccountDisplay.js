import Footer from '../Common/Footer';
import Header from '../Common/Header';
import CreateAccount from './CreateAccount';
import { getFirestore, addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

const db = getFirestore()
const auth = getAuth()
const colRef = collection(db, 'users')

const CreateAccountDisplay = () => {
  const createAccountHandler = async (
    nameValue,
    emailValue,
    passwordValue,
    reEnterPasswordValue,
    accountTypeValue
  ) => {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((cred) => {
            sendEmailVerification(cred.user)
            addDoc(colRef, {
                email: emailValue,
                password: passwordValue,
                reEnterPassword: reEnterPasswordValue,
                name: nameValue,
                accountType: accountTypeValue,
                createdAt: serverTimestamp() 
            }) 
            console.log('user created', cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
    // await fetch(
    //   'https://react-http-bb74b-default-rtdb.firebaseio.com/accounts.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       user: accountData,
    //     }),
    //   }
    // );
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
