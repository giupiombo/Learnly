import { useContext } from 'react';
import UserContext from '../../context/user-context';
import HeaderProfessor from '../Professor/HeaderProfessor';
import HeaderStudent from '../Student/HeaderStudent';
import Footer from '../Common/Footer';
import Home from './Home';

const HomeDisplay = () => {
  const { loggedUser } = useContext(UserContext);

  return (
    <>
      {loggedUser.accountType === 'professor' ? (
        <HeaderProfessor />
      ) : (
        <HeaderStudent />
      )}
      <Home />
      <Footer />
    </>
  );
};

export default HomeDisplay;
