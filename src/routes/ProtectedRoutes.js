import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../stores/state';

const ProtectedRoutes = ({ children }) => {
  const authState = useRecoilValue(authAtom)
  const location = useLocation()

  if (!authState.loggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children;
}

export default ProtectedRoutes;