import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage';
import RegisterUser from './components/RegisterUser';
import UsersList from './components/UsersList';

import GlobalStyle from './styles/Global';
import Theme from './styles/Theme';

export default function App() {
  const mainStyle = { padding: '1rem 2rem' };

  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Route path='/' component={Header} />
        <main style={mainStyle}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/register-user' component={RegisterUser} />
            <Route path='/users-list' component={UsersList} />
          </Switch>
        </main>
      </Theme>
    </BrowserRouter>
  );
}
