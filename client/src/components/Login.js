import React, { useContext, useState } from 'react';
import Axios from 'axios';

import { UserContext } from '../Providers/UserProvider';

import { LoginStyle } from '../styles/Login.js';

export default function Login() {
  const { setLogged } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginText, setLoginText] = useState('');

  document.title = 'Logar';

  function Logar() {
    Axios.get('http://localhost:3001/user', {
      params: {
        username: username,
        password: password,
      },
    })
      .then(function (res) {
        if (res.data !== null) {
          setLoginText('');
          setLogged(true);
        } else setLoginText('Usuário ou senha errado!');
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function ReplaceString(string) {
    const lowerCaseString = string.toLowerCase();
    const replacedString = lowerCaseString.replace(/[^a-z0-9]/g, '');
    return replacedString;
  }

  return (
    <LoginStyle>
      <h2>Logar</h2>
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(ReplaceString(e.target.value))}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(ReplaceString(e.target.value))}
      />
      <button type='submit' onClick={Logar}>
        Logar
      </button>
      <p>{loginText}</p>
    </LoginStyle>
  );
}
