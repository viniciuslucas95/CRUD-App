import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { UsersListStyle } from '../styles/UsersList';

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);

  document.title = 'Lista de Usuários';

  useEffect(function () {
    Axios.get('http://localhost:3001/user/list').then((response) => {
      setUsersList(response.data);
    });
  }, []);

  return (
    <UsersListStyle>
      <h2>Lista de usuários</h2>
      {usersList.map((user, id) => (
        <li key={id}>
          <b>Usuário {id + 1}:</b> <i>{user.username}</i> <br /> <b>Senha: </b>
          <i>{user.password}</i>
        </li>
      ))}
    </UsersListStyle>
  );
}
