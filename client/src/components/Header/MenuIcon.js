import React from 'react';

import { MenuIconStyle } from '../../styles/Header';

export default function MenuIcon({ toggle, onClick }) {
  return (
    <MenuIconStyle toggle={toggle} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </MenuIconStyle>
  );
}
