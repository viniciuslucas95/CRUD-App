import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import UsersList from './components/UsersList';
import { UserContext } from './Providers/UserProvider';

import GlobalStyle from './styles/Global';
import Theme from './styles/Theme';

export default function App() {
  const { logged } = useContext(UserContext);

  const mainStyle = { padding: '1rem 2rem' };

  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Route path='/' component={Header} />
        <main style={mainStyle}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/register'>
              {logged ? (
                <Redirect to='/' />
              ) : (
                <Route path='/register' component={Register} />
              )}
            </Route>
            <Route path='/user/list'>
              {!logged ? (
                <Redirect to='/' />
              ) : (
                <Route path='/user/list' component={UsersList} />
              )}
            </Route>
            <Route path='/login'>
              {logged ? (
                <Redirect to='/' />
              ) : (
                <Route path='/login' component={Login} />
              )}
            </Route>
          </Switch>
        </main>
      </Theme>
    </BrowserRouter>
  );
}
