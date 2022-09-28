import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './ForgotPassword.module.css';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/use-input';

const isEmail = (value) => value.includes('@');

const ForgotPassword = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let navigate = useNavigate();

  let formIsValid = false;

  if (emailIsValid) {
    formIsValid = true;
  }

  const forgotPasswordHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onForgotPassword(emailValue);

    resetEmail();
  };

  const backHandler = () => {
    navigate('/');
  };

  const emailClasses = emailHasError ? classes.invalid : classes;

  return (
    <Card className={classes.input}>
      <h2>Forgot Password</h2>
      <form onSubmit={forgotPasswordHandler}>
        <label htmlFor="email">Email</label>
        <input
          className={emailClasses}
          id="email"
          type="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <Button type="submit">Recover Password</Button>
        <button className={classes.text} onClick={backHandler}>
          Back
        </button>
      </form>
    </Card>
  );
};

export default ForgotPassword;
