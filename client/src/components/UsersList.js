import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';

import { UserContext } from '../Providers/UserProvider';

import { UsersListStyle } from '../styles/UsersList';

export default function UsersList() {
  const { token } = useContext(UserContext);

  const [usersList, setUsersList] = useState([]);

  document.title = 'Lista de Usuários';

  useEffect(UpdateList, []);

  async function UpdateList() {
    try {
      const users = await Axios.request({
        url: 'http://localhost:3001/user/list',
        headers: { 'auth-token': token },
      });

      setUsersList(users.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async function DeleteUser(id) {
    try {
      await Axios.delete('http://localhost:3001/user/', {
        headers: { 'auth-token': token },
        data: { id: id },
      });

      UpdateList();
    } catch (err) {
      console.log(err);
    }
  }

  async function UpdateUser(id) {
    try {
      await Axios.patch(
        'http://localhost:3001/user/',
        { id: id },
        { headers: { 'auth-token': token } }
      );

      UpdateList();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UsersListStyle>
      <div>
        <h2>Lista de usuários</h2>
        {usersList.map((user) => (
          <li key={user._id}>
            <b>ID: </b> <i>{user._id}</i>
            <br />
            <b>Usuário:</b> <i>{user.username}</i> <br />
            <b>Senha: </b>
            <i>{user.password}</i>
            <br />
            <div>
              <button onClick={() => UpdateUser(user._id)}>Edit</button>
              <button onClick={() => DeleteUser(user._id)}>Delete</button>
            </div>
          </li>
        ))}
      </div>
    </UsersListStyle>
  );
}
