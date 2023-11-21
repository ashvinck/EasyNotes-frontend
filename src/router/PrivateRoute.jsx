import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentToken,
  selectCurrentUser,
} from '../features/user/userSlice';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = useSelector(selectCurrentToken);
  const username = useSelector(selectCurrentUser);
  const savedUserName = localStorage.getItem('username');

  return token && username === savedUserName ? (
    <Outlet />
  ) : (
    <Navigate to='/auth/login' />
  );
};

export default PrivateRoute;
