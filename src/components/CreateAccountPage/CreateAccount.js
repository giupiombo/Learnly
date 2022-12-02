import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './CreateAccount.module.css';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/use-input';
import { useState } from 'react';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const CreateAccount = (props) => {
  const [file, setFile] = useState('');

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const {
    value: reEnterPasswordValue,
    isValid: reEnterPasswordIsValid,
    hasError: reEnterPasswordHasError,
    valueChangeHandler: reEnterPasswordChangeHandler,
    inputBlurHandler: reEnterPasswordBlurHandler,
    reset: resetReEnterPassword,
  } = useInput((value) => value === passwordValue);

  const {
    value: accountTypeValue,
    isValid: accountTypeIsValid,
    valueChangeHandler: accountTypeChangeHandler,
    reset: resetAccountType,
  } = useInput(isNotEmpty);

  // const {
  //   value: fileValue,
  //   isValid: fileIsValid,
  //   hasError: fileHasError,
  //   valueChangeHandler: fileChangeHandler,
  //   inputBlurHandler: fileBlurHandler,
  //   reset: resetFile,
  // } = useInput(isNotEmpty);

  let navigate = useNavigate();

  let formIsValid = false;

  if (
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    reEnterPasswordIsValid &&
    accountTypeIsValid
  ) {
    formIsValid = true;
  }

  const createAccountHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onCreateAccount(
      nameValue,
      emailValue,
      passwordValue,
      reEnterPasswordValue,
      accountTypeValue,
      file
      // fileValue
    );

    resetName();
    resetEmail();
    resetPassword();
    resetReEnterPassword();
    resetAccountType();
    // resetFile();
  };

  const backHandler = () => {
    navigate('/login');
  };

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  }

  const nameClasses = nameHasError ? classes.invalid : classes;
  const emailClasses = emailHasError ? classes.invalid : classes;
  const passwordClasses = passwordHasError ? classes.invalid : classes;
  const reEnterPasswordClasses = reEnterPasswordHasError
    ? classes.invalid
    : classes;
  // const fileClasses = fileHasError ? classes.invalid : classes;

  return (
    <Card className={classes.input}>
      <h2>Create Account</h2>
      <form onSubmit={createAccountHandler}>
        <label htmlFor="name">Name</label>
        <input
          className={nameClasses}
          id="name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          className={emailClasses}
          id="email"
          type="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          className={passwordClasses}
          id="password"
          type="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        <label htmlFor="re-enter-password">Re-enter Password</label>
        <input
          className={reEnterPasswordClasses}
          id="re-enter-password"
          type="password"
          value={reEnterPasswordValue}
          onChange={reEnterPasswordChangeHandler}
          onBlur={reEnterPasswordBlurHandler}
        />
        <label htmlFor="account-type">Account Type</label>
        <select value={accountTypeValue} onChange={accountTypeChangeHandler}>
          <option value="null"></option>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
        </select>
        {accountTypeValue === 'professor' && (
          <>
            <label htmlFor="resume">Attach your Resume</label>
            <input
              // className={fileClasses}
              id="file"
              type="file"
              // value={fileValue}
              onChange={fileChangeHandler}
              // onBlur={fileBlurHandler}
            />
          </>
        )}
        <Button disabled={!formIsValid} type="submit" /*onClick={addUser}*/>
          Create Account
        </Button>
        <button type="button" className={classes.text} onClick={backHandler}>
          Already have an account? Log in!
        </button>
      </form>
    </Card>
  );
};

export default CreateAccount;
