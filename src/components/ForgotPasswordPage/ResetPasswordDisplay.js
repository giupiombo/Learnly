import { useState } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import ResetPassword from './ResetPassword';

const ResetPasswordDisplay = () => {
  const resetPasswordHandler = (password, reEnterPassword) => {
    // setUsersList((prevUsersList) => {
    //   return [
    //     ...prevUsersList,
    //     {
    //       email: email,
    //       id: Math.random().toString(),
    //     },
    //   ];
    // });
  };

  return (
    <div>
      <Header />
      <ResetPassword onResetPassword={resetPasswordHandler} />
      <Footer />
    </div>
  );
};

export default ResetPasswordDisplay;
