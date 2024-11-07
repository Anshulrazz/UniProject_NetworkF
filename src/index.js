import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './components/Contaxt/AuthContext'; // Adjust path if needed
import App from './App';
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
