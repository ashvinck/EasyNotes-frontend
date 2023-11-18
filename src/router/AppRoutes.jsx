import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Login from '../components/Login';
import Signup from '../components/Signup';
import ResetPassword from '../components/ResetPassword';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/signup' element={<Signup />} />
      <Route path='/auth/reset-password' element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoutes;
