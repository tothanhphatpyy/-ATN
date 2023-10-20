// PrivateRoute.tsx in v6
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '@hooks/useAuth';
import { AuthProps } from '@atom/auth/auth';

const PrivateRoute = () => {
    let location = useLocation();
    // const { auth } = useAuth(); // check token validate
  
    // if (!(auth as AuthProps).tokenIsValid) {
    //   return <Navigate to="/login" replace state={{ from: location }} />;
    // }
  
    return <Outlet />;
  };
  
export default PrivateRoute;