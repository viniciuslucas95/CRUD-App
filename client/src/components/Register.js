import React, { useState } from 'react';
import Axios from 'axios';

import { RegisterStyle } from '../styles/Register';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function RegisterUser() {
    if (username === '' || password === '') return;

    Axios.post('http://localhost:3001/register', {
      username: username,
      password: password,
    });
  }

  return (
    <div>
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
      <button type='submit' onClick={RegisterUser}>
        Criar usuário
      </button>
    </div>
  );
}
