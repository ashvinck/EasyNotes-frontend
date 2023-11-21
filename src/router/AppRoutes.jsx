import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup';
import Notes from '../pages/notes';
import UpdatePassword from '../components/auth/updatePassword.jsx';
import VerifyEmail from '../components/auth/verifyEmail.jsx';
import ForgotPassword from '../components/auth/ForgotPassword.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/signup' element={<Signup />} />
      <Route
        path='auth/verify-email/:verficationToken'
        element={<VerifyEmail />}
      />
      <Route path='/auth/forgot-password' element={<ForgotPassword />} />
      <Route path='/auth/reset-password/:token' element={<UpdatePassword />} />

      <Route element={<PrivateRoute />}>
        <Route path='/notes' element={<Notes />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
