import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import TextFormField from './TextField.jsx';
import AuthCardWrapper from './authCardWrapper.jsx';

// Styled Typography
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
  color: theme.palette.primary.main.dark,
  textAlign: 'center',
  marginBottom: '10px',
  '&:hover': {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
}));

// Login Validation
const loginSchema = yup.object({
  email: yup
    .string()
    .min(5, 'Please enter a valid email address')
    .max(30, 'Enter a valid email address')
    .required('Please provide an email address')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email format'
    ),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Character limit exceeded')
    .required('Please enter your password')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    ),
});

// Login Form Component
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <AuthCardWrapper>
      <form onSubmit={formik.handleSubmit}>
        {/*  ----- Email ----  */}
        <TextFormField
          id='email'
          label='Email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
        {/* ----- Password ------ */}
        <TextFormField
          id='password'
          label='Password'
          name='password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        {/* ---- Login Button ----- */}
        <Button type='submit' variant='contained' fullWidth>
          Login
        </Button>

        {/* ----- Divider ----- */}
        <Divider
          sx={{
            height: '3px',
            backgroundColor: '#e5e5e5',
            marginY: '10px',
          }}
        />
        {/*  ----- Forgot Password ----- */}
        <StyledTypography>
          <Link to='/auth/reset-password'>Forgot Password</Link>
        </StyledTypography>
        {/*  -------- Signup --------- */}
        <StyledTypography>
          <Link to='/auth/signup'>Don't have an Account? SignUp</Link>
        </StyledTypography>
      </form>
    </AuthCardWrapper>
  );
};

export default Login;
