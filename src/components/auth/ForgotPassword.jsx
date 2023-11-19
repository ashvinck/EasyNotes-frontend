import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextFormField from '../TextField.jsx';
import AuthCardWrapper from './AuthCardWrapper.jsx';
import { useForgotPasswordMutation } from '../../features/user/userApiSlice.js';
import Loading from '../Loading.jsx';

// Styled Typography
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
  color: theme.palette.secondary.main,
  textAlign: 'center',
  marginTop: '10px',
  '&:hover': {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
}));

const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .min(5, 'Please enter a valid email address')
    .max(30, 'Enter a valid email address')
    .required('Please provide an email address')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email format'
    ),
});

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      console.log(values);
      forgotUserPassword(values);
    },
  });

  function forgotUserPassword(email) {
    forgotPassword(email)
      .unwrap()
      .then((response) => toast.success(response.message))
      .then(() =>
        setTimeout(() => {
          navigate('/auth/login');
        }, 7000)
      )
      .catch((error) => {
        console.log(error.data.message);
        const errorMessage = error?.data?.message || 'An error occurred.';
        toast.error(errorMessage);
      });
  }

  return (
    <>
      {isLoading ? (
        <Loading open={isLoading} />
      ) : (
        <>
          <ToastContainer />
          <AuthCardWrapper>
            <form onSubmit={formik.handleSubmit}>
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
              <Button type='submit' variant='contained' fullWidth>
                Reset Password
              </Button>
            </form>
            <Link to='/auth/login'>
              <StyledTypography>Back to Login</StyledTypography>
            </Link>
          </AuthCardWrapper>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
