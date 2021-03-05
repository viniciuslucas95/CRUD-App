import React, { useContext } from 'react';

import MenuIcon from './MenuIcon';
import NavBar from './NavBar';

import { HeaderStyle } from '../../styles/Header';
import { SideNavContext } from '../../Providers/SideNavProvider';

export default function Header({ location }) {
  const { sideNav, setSideNav } = useContext(SideNavContext);

  function UpdateScreenSize() {
    setSideNav(false);
  }

  window.addEventListener('resize', UpdateScreenSize);

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
