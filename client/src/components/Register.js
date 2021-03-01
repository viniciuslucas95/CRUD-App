import React, { useState } from 'react';
import Axios from 'axios';

import ReplaceString from '../ReplaceString';

import { RegisterStyle } from '../styles/Register';

export default function RegisterUser({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  document.title = 'Registrar';

  function Register() {
    Axios.post('http://localhost:3001/user', {
      username: username,
      password: password,
    })
      .then(function () {
        console.log('User created successfully.');

        history.push('/');
      })
      .catch(function (err) {
        setErrorText(err.response.data);
      });
  }

  return (
    <RegisterStyle>
      <div>
        <h2>Registrar</h2>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={(e) => setUsername(ReplaceString(e.target.value))}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={(e) => setPassword(ReplaceString(e.target.value))}
        />
        <button type='submit' onClick={Register}>
          Registrar
        </button>
        <p>{errorText}</p>
      </div>
    </RegisterStyle>
  );
}
