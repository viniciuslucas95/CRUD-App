import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarStyle } from '../../styles/Header';

export default function NavBar({ toggle, pathname }) {
  let navItems = [];

  if (pathname !== '/')
    navItems.push(
      <Link key={navItems.length} to='/'>
        <li>Página Principal</li>
      </Link>
    );

  if (pathname !== '/register-users')
    navItems.push(
      <Link key={navItems.length} to='/register-users'>
        <li>Registrar Conta</li>
      </Link>
    );

  if (pathname !== '/users-list')
    navItems.push(
      <Link key={navItems.length} to='/users-list'>
        <li>Lista de Usuários</li>
      </Link>
    );

  return (
    <NavBarStyle toggle={toggle}>
      <ul>{navItems}</ul>
    </NavBarStyle>
  );
}
