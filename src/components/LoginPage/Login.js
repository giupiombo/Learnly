import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const Login = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  let navigate = useNavigate();

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const loginHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onLogin(emailValue, passwordValue);

    resetEmail();
    resetPassword();
  };

  const forgotPasswordHandler = () => {
    navigate('/forgotPassword');
  };

  const signUpHandler = () => {
    navigate('/createAccount');
  };

  return (
    <Card className={classes.input}>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        <button className={classes.text1} onClick={forgotPasswordHandler}>
          Forgot your password?
        </button>
        <Button type="submit">Login</Button>
        <button className={classes.text2} onClick={signUpHandler}>
          New to Learnly? Sign Up!
        </button>
      </form>
    </Card>
  );
};

export default Login;
