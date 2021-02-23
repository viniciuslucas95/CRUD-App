import React, { useState } from 'react';
import Axios from 'axios';

import { RegisterUserStyle } from '../styles/RegisterUser';

export default function RegisterUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function Register() {
    if (username === '' || password === '') return;

    Axios.post('http://localhost:3001/register-user', {
      username: username,
      password: password,
    });
  }

  return (
    <RegisterUserStyle>
      <h2>Registrar Usuário</h2>
      <input
        type='text'
        name='username'
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' onClick={Register}>
        Registrar
      </button>
    </RegisterUserStyle>
  );
}
