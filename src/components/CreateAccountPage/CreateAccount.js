import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './CreateAccount.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredReEnterPassword, setEnteredReEnterPassword] = useState('');
  const [enteredAccountType, setEnteredAccountType] = useState('');

  let navigate = useNavigate();

  const createAccountHandler = (event) => {
    event.preventDefault();

    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0 ||
      enteredReEnterPassword.trim().length === 0
    ) {
      return;
    }

    props.onCreateAccount(
      enteredName,
      enteredEmail,
      enteredPassword,
      enteredReEnterPassword,
      enteredAccountType
    );

    setEnteredName('');
    setEnteredEmail('');
    setEnteredPassword('');
    setEnteredReEnterPassword('');
    setEnteredAccountType('');
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const reEnterPasswordChangeHandler = (event) => {
    setEnteredReEnterPassword(event.target.value);
  };

  const accountTypeChangeHandler = (event) => {
    setEnteredAccountType(event.target.value);
  };

  const backHandler = () => {
    navigate('/');
  };

  return (
    <Card className={classes.input}>
      <h2>Create Account</h2>
      <form onSubmit={createAccountHandler}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        />
        <label htmlFor="name">Email</label>
        <input
          id="email"
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <label htmlFor="re-enter-password">Re-enter Password</label>
        <input
          id="re-enter-password"
          type="password"
          value={enteredReEnterPassword}
          onChange={reEnterPasswordChangeHandler}
        />
        <label htmlFor="account-type">Account Type</label>
        <select value={enteredAccountType} onChange={accountTypeChangeHandler}>
          <option value="student">Student</option>
          <option value="professor">Professor</option>
        </select>
        <Button type="submit">Create Account</Button>
        <button className={classes.text} onClick={backHandler}>
          Already have an account? Log in!
        </button>
      </form>
    </Card>
  );
};

export default CreateAccount;
