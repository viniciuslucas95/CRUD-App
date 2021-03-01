import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../Providers/UserProvider';

import { NavBarStyle } from '../../styles/Header';

export default function NavBar({ setNavBar, toggle, pathname }) {
  const { token, setToken } = useContext(UserContext);

  const navItems = [];

  if (pathname !== '/')
    navItems.push(
      <Link onClick={() => setNavBar(false)} key={navItems.length} to='/'>
        <li>Início</li>
      </Link>
    );

  if (token === null) {
    if (pathname !== '/login')
      navItems.push(
        <Link
          onClick={() => setNavBar(false)}
          key={navItems.length}
          to='/login'
        >
          <li>Logar</li>
        </Link>
      );

    if (pathname !== '/register')
      navItems.push(
        <Link
          onClick={() => setNavBar(false)}
          key={navItems.length}
          to='/register'
        >
          <li>Registrar</li>
        </Link>
      );
  } else {
    if (pathname !== '/user/list')
      navItems.push(
        <Link
          onClick={() => setNavBar(false)}
          key={navItems.length}
          to='/user/list'
        >
          <li>Lista de Usuários</li>
        </Link>
      );

    navItems.push(
      <Link
        onClick={() => {
          setToken(null);
          setNavBar(false);
        }}
        key={navItems.length}
        to='/'
      >
        <li>Deslogar</li>
      </Link>
    );
  }

  return (
    <NavBarStyle toggle={toggle}>
      <ul>{navItems}</ul>
    </NavBarStyle>
  );
}
