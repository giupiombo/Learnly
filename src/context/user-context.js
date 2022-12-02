import React, { useState } from 'react';

const UserContext = React.createContext();

export const UserContextProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState({});

  const setUser = (id, name, email, password, accountType) => {
    setLoggedUser({
      id: id,
      name: name,
      email: email,
      password: password,
      accountType: accountType,
    });
  };

  return (
    <UserContext.Provider value={{ loggedUser, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
