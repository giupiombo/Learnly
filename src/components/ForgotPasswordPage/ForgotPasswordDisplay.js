import { useState } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import ForgotPassword from './ForgotPassword';

const LoginDisplay = () => {
  const [usersList, setUsersList] = useState([]);
  //userList will be used to validate the user later

  const forgotPasswordHandler = (email) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          email: email,
          id: Math.random().toString(),
        },
      ];
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

export default LoginDisplay;
