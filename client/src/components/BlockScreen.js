import React, { useContext } from 'react';

import { SideNavContext } from '../Providers/SideNavProvider';

import { BlockScreenStyle } from '../styles/BlockScreen';

export default function BlockScreen() {
  const { sideNav, setSideNav } = useContext(SideNavContext);

  return (
    <>
      {sideNav ? <BlockScreenStyle onClick={() => setSideNav(false)} /> : null}
    </>
  );
}
