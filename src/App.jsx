import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './globalStyles';
import Routes from './components/Routes';
import UserContextProvider from './contexts/userContext';

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
        <ToastContainer />
      </BrowserRouter>
    </UserContextProvider>
  );
}
