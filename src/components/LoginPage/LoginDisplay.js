import { useState } from 'react';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Login from './Login';

const LoginDisplay = () => {
  const [usersList, setUsersList] = useState([]);
  //userList will be used to validate the user later

  const loginHandler = (email, password) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          email: email,
          password: password,
          id: Math.random().toString(),
        },
      ];
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
