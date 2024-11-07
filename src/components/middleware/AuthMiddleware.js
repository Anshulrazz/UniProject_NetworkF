import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Contaxt/AuthContext'; // Adjust the path as necessary

const AuthMiddleware = ({ children, adminRequired = true }) => {
  const { isAuthenticated, userRole } = useAuth(); // Assuming you manage user roles in your AuthContext

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Redirect to dashboard if user is admin
  if (adminRequired && userRole === 'admin') {
    return <Navigate to="/admin" />;
  }
  return children;
};

export default AuthMiddleware;
