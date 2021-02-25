import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarStyle } from '../../styles/Header';

export default function NavBar({ setNavBar, toggle, pathname }) {
  let navItems = [];

  if (pathname !== '/')
    navItems.push(
      <Link onClick={() => setNavBar(false)} key={navItems.length} to='/'>
        <li>Página Principal</li>
      </Link>
    );

  if (pathname !== '/register-user')
    navItems.push(
      <Link
        onClick={() => setNavBar(false)}
        key={navItems.length}
        to='/register-user'
      >
        <li>Registrar Conta</li>
      </Link>
    );

  if (pathname !== '/users-list')
    navItems.push(
      <Link
        onClick={() => setNavBar(false)}
        key={navItems.length}
        to='/users-list'
      >
        <li>Lista de Usuários</li>
      </Link>
    );

  return (
    <NavBarStyle toggle={toggle}>
      <ul>{navItems}</ul>
    </NavBarStyle>
  );
}
