import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';

import { UserContext } from '../Providers/UserProvider';

import { UsersListStyle } from '../styles/UsersList';

export default function UsersList() {
  const { token } = useContext(UserContext);

  const [usersList, setUsersList] = useState([]);

  document.title = 'Lista de Usuários';

  useEffect(async function () {
    try {
      const users = await Axios.request({
        url: 'http://localhost:3001/user/list',
        headers: { 'auth-token': token },
      });
      setUsersList(users.data);
    } catch (err) {
      console.log(err.response.data);
    }
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
