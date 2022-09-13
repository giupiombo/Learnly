import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  let navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      return;
    }

    props.onLogin(enteredUsername, enteredPassword);

    setEnteredUsername('');
    setEnteredPassword('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
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
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
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
