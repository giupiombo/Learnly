import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  let navigate = useNavigate();

  const homeHandler = () => {
    navigate('/');
  };

  const loginHandler = () => {
    navigate('/login');
  };

  const createAccountHandler = () => {
    navigate('/createAccount');
  };

  return (
    <header className={classes.header}>
      <button className={classes.home} onClick={homeHandler}>
        Learnly
      </button>
      <span></span>
      <button onClick={loginHandler}>Login</button>
      <button onClick={createAccountHandler}>Sign Up</button>
    </header>
  );
};

export default Header;
