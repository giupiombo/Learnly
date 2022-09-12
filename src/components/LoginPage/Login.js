import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './Login.module.css';
import { useState } from 'react';

const Login = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

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

  // move to a different page
  const forgotPasswordHandler = () => {};

  // move to a different page
  const signUpHandler = () => {};

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
          type="text"
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
