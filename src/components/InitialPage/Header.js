import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  let navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login');
  };

  const createAccountHandler = () => {
    navigate('/createAccount');
  };

  return (
    <header className={classes.header}>
      <h2>Learnly</h2>
      <span></span>
      <button onClick={loginHandler}>Login</button>
      <button onClick={createAccountHandler}>Sign Up</button>
    </header>
  );
};

export default Header;
