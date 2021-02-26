import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [logged, setLogged] = useState(false);

  return (
    <UserContext.Provider value={{ logged, setLogged }}>
      {children}
    </UserContext.Provider>
  );
}
