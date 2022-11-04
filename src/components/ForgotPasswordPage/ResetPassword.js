import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './ResetPassword.module.css';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';

const ResetPassword = (props) => {
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

  let navigate = useNavigate();

  let formIsValid = false;

  if (passwordIsValid && reEnterPasswordIsValid) {
    formIsValid = true;
  }

  const resetPasswordHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onResetPassword(passwordValue, reEnterPasswordValue);

    resetPassword();
    resetReEnterPassword();
  };

  const backHandler = () => {
    navigate('/');
  };

  const passwordClasses = passwordHasError ? classes.invalid : classes;
  const reEnterPasswordClasses = reEnterPasswordHasError
    ? classes.invalid
    : classes;

  return (
    <Card className={classes.input}>
      <h2>Forgot Password</h2>
      <form onSubmit={resetPasswordHandler}>
        <label htmlFor="password">New Password</label>
        <input
          className={passwordClasses}
          id="password"
          type="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        <label htmlFor="password">Re-Enter New Password</label>
        <input
          className={reEnterPasswordClasses}
          id="reEnterPassword"
          type="password"
          value={reEnterPasswordValue}
          onChange={reEnterPasswordChangeHandler}
          onBlur={reEnterPasswordBlurHandler}
        />
        <Button type="submit">Reset Password</Button>
        <button className={classes.text} onClick={backHandler}>
          Back
        </button>
      </form>
    </Card>
  );
};

export default ResetPassword;
