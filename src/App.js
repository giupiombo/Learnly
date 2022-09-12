import { useState } from 'react';
import './App.css';
import Login from './components/LoginPage/Login';
import Header from './components/UI/Header';

function App() {
  const [usersList, setUsersList] = useState([]);
  //userList will be used to validate the user later

  const loginHandler = (username, password) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          username: username,
          password: password,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <Header />
      <Login onLogin={loginHandler} />
    </div>
  );
}

export default App;
