import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './globalStyles';
import Routes from './components/Routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}
