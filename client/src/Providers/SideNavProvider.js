import React, { useState, createContext } from 'react';

export const SideNavContext = createContext();

export default function SideNavProvider({ children }) {
  const [sideNav, setSideNav] = useState(false);

  return (
    <SideNavContext.Provider value={{ sideNav, setSideNav }}>
      {children}
    </SideNavContext.Provider>
  );
}
