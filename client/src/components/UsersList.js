import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { UsersListStyle } from '../styles/UsersList';

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);

  document.title = 'Lista de Usuários';

  useEffect(async function () {
    try {
      const users = await Axios.get('http://localhost:3001/user/list');
      setUsersList(users.data);
    } catch (err) {
      console.log(err.response.data);
    }
    /*Axios.get('http://localhost:3001/user/list').then((res) => {
      setUsersList(res.data);
    });*/
  }, []);

  return (
    <UsersListStyle>
      <div>
        <h2>Lista de usuários</h2>
        {usersList.map((user, id) => (
          <li key={id}>
            <b>ID: </b> <i>{user._id}</i>
            <br />
            <b>Usuário:</b> <i>{user.username}</i> <br />
            <b>Senha: </b>
            <i>{user.password}</i>
          </li>
        ))}
      </div>
    </UsersListStyle>
  );
}
