import Footer from '../UI/Footer';
import Header from '../UI/Header';
import CreateAccount from './CreateAccount';

const CreateAccountDisplay = () => {
  const createAccountHandler = async (accountData) => {
    await fetch(
      'https://react-http-bb74b-default-rtdb.firebaseio.com/accounts.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: accountData,
        }),
      }
    );
  };

  return (
    <div>
      <Header />
      <CreateAccount onCreateAccount={createAccountHandler} />
      <Footer />
    </div>
  );
};

export default CreateAccountDisplay;
