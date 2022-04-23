import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoutes = () => {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return null;
}

export default ProtectedRoutes;