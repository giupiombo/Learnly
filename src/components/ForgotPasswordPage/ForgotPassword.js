import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './ForgotPassword.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');

  let navigate = useNavigate();

  const forgotPasswordHandler = (event) => {
    event.preventDefault();

    if (enteredEmail.trim().length === 0) {
      return;
    }

    props.onForgotPassword(enteredEmail);

    setEnteredEmail('');
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const backHandler = () => {
    navigate('/');
  };

  return (
    <Card className={classes.input}>
      <h2>Forgot Password</h2>
      <form onSubmit={forgotPasswordHandler}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
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
