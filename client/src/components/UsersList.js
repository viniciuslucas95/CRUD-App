import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { UsersListStyle } from '../styles/UsersList';

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(UpdateList, []);

  function UpdateList() {
    Axios.get('http://localhost:3001/users-list').then((response) => {
      setUsersList(response.data);
    });
  }

  return (
    <UsersListStyle>
      <div>
        <h3>Lista de usuários</h3>
        <button onClick={UpdateList}>Atualizar lista</button>
      </div>
      {usersList.map((user, id) => (
        <li key={id}>
          <b>Usuário {id + 1}:</b> <i>{user.username}</i> <br /> <b>Senha: </b>
          <i>{user.password}</i>
        </li>
      ))}
    </UsersListStyle>
  );
}
