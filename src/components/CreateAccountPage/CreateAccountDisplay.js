import Footer from '../Common/Footer';
import Header from '../Common/Header';
import CreateAccount from './CreateAccount';

const CreateAccountDisplay = () => {
  const createAccountHandler = async (
    name,
    email,
    password,
    reEnterPassword,
    accountType
  ) => {
    // await fetch(
    //   'https://react-http-bb74b-default-rtdb.firebaseio.com/accounts.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       user: accountData,
    //     }),
    //   }
    // );
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
