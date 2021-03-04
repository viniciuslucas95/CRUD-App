import React, { useContext, useState } from 'react';
import Axios from 'axios';

import { UserContext } from '../Providers/UserProvider';
import { LoginStyle } from '../styles/Login.js';
import ReplaceString from '../ReplaceString';

export default function Login() {
  const { setToken } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  document.title = 'Logar';

  async function Logar() {
    try {
      const res = await Axios.get('http://localhost:3001/user', {
        params: {
          username: username,
          password: password,
        },
      });

      setToken(res.data);
    } catch (err) {
      setErrorText(err.response.data);
    }
  }

  return (
    <LoginStyle>
      <div>
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
        <p>{errorText}</p>
      </div>
    </LoginStyle>
  );
}
