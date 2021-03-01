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
  const { token } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Route path='/' component={Header} />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/register'>
            {token === null ? (
              <Route path='/register' component={Register} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route path='/user/list'>
            {token !== null ? (
              <Route path='/user/list' component={UsersList} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route path='/login'>
            {token === null ? (
              <Route path='/login' component={Login} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
        </Switch>
      </Theme>
    </BrowserRouter>
  );
}
