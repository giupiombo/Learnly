import { useState } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import ResetPassword from './ResetPassword';

const ResetPasswordDisplay = () => {
  const resetPasswordHandler = (password, reEnterPassword) => {};

  return (
    <div>
      <Header />
      <ResetPassword onResetPassword={resetPasswordHandler} />
      <Footer />
    </div>
  );
};

export default ResetPasswordDisplay;
