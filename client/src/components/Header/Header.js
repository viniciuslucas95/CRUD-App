import React, { useEffect, useState } from 'react';

import MenuIcon from './MenuIcon';
import NavBar from './NavBar';

import { HeaderStyle } from '../../styles/Header';

export default function Header({ location }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
      setSideNav(false);
    }

    window.addEventListener('resize', updateWidth);
  });

  return (
    <HeaderStyle>
      <h1>CRUD App</h1>
      <MenuIcon toggle={sideNav} onClick={() => setSideNav(!sideNav)} />
      <NavBar
        setNavBar={setSideNav}
        toggle={sideNav}
        pathname={location.pathname}
      />
    </HeaderStyle>
  );
}
