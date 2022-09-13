import { useState } from 'react';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import CreateAccount from './CreateAccount';

const CreateAccountDisplay = () => {
  const [usersList, setUsersList] = useState([]);
  //userList will be used to validate the user later

  const createAccountHandler = (name, email, password, reEnterPassword) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: name,
          email: email,
          password: password,
          reEnterPassword: reEnterPassword,
          id: Math.random().toString(),
        },
      ];
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
