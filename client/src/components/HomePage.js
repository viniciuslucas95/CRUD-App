import React from 'react';

import { HomePageStyle } from '../styles/HomePage';

export default function HomePage() {
  document.title = 'CRUD App';

  return (
    <HomePageStyle>
      <h2>Página Inicial</h2>
    </HomePageStyle>
  );
}
