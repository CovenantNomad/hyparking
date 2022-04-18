import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../hooks/useUser';

const ProtectedRoutes = ({ children }) => {
  const auth = useUser()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to="/" state={{from: location}} replace />
  }

  return children;
}

export default ProtectedRoutes;