import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeContextProvider } from './context/darkModeContext';
import './style.scss';
import App from './App';
import { AuthContextProvider } from './context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);


