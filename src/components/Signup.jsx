import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
  marginTop: '10px',
  '&:hover': {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
}));

/**
 * Validation Schema
 */
const registrationSchema = yup.object({
  username: yup
    .string()
    .min(3, 'Please enter a username')
    .max(15, 'Please enter a shorter username')
    .required('Please provide a valid username'),

  email: yup
    .string()
    .min(5, 'Please enter a valid email address')
    .max(30, 'Enter a shorter email address')
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

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password field is required'),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <AuthCardWrapper>
      <form onSubmit={formik.handleSubmit}>
        <TextFormField
          id='username'
          label='Username'
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.username}
          error={formik.errors.username}
        />
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
        <TextFormField
          id='password'
          label='Password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        <TextFormField
          id='confirmPassword'
          label='Confirm Password'
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.confirmPassword}
          error={formik.errors.confirmPassword}
        />
        <Button type='submit' variant='contained' fullWidth>
          Register
        </Button>
      </form>
      <StyledTypography>
        <Link to='/auth/login'>Already have an Account? Login</Link>
      </StyledTypography>
    </AuthCardWrapper>
  );
};

export default Signup;
