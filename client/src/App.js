import React from 'react';

import RegisterUser from './components/RegisterUser';
import UsersList from './components/UsersList';

import GlobalStyle from './styles/Global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RegisterUser />
      <UsersList />
    </>
  );
}
