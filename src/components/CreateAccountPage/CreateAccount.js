import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './CreateAccount.module.css';
import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';
import useInput from '../../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const CreateAccount = (props) => {
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

  // const addUser = () => {
  //   Axios.post('http://localhost:3001/create', {
  //     name: nameValue,
  //     email: emailValue,
  //     password: passwordValue,
  //     renterPassword: reEnterPasswordValue,
  //   }).then(() => {
  //     console.log('Success');
  //   });
  // };

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
      accountTypeValue
    );

    resetName();
    resetEmail();
    resetPassword();
    resetReEnterPassword();
    resetAccountType();
  };

  const backHandler = () => {
    navigate('/');
  };

  const nameClasses = nameHasError ? classes.invalid : classes;
  const emailClasses = emailHasError ? classes.invalid : classes;
  const passwordClasses = passwordHasError ? classes.invalid : classes;
  const reEnterPasswordClasses = reEnterPasswordHasError
    ? classes.invalid
    : classes;

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
