import React, { useState } from 'react';
import Axios from 'axios';

import { RegisterStyle } from '../styles/Register';

export default function RegisterUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  document.title = 'Registrar';

  function Register() {
    Axios.post('http://localhost:3001/user', {
      username: username,
      password: password,
    })
      .then(function () {})
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
    <RegisterStyle>
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
    </RegisterStyle>
  );
}
