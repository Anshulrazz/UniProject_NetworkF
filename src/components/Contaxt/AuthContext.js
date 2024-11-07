import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));
  const [userRole, setUserRole] = useState(null); // Track user role
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      if (response.data.token) {
        Cookies.set('token', response.data.token, { expires: 7 });
        setUserRole(response.data.role); // Assuming your API returns user role
        setIsAuthenticated(true);
        setError(null);
      }
    } catch (err) {
      alert('Login failed. Please check your credentials.',err);
    }
  };
  // const document = new Document({
  //   name,
  //   related_photo,
  //   caption,
  //   file,
  //   category
  // });

  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUserRole(null); // Clear user role on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error, userRole,}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
