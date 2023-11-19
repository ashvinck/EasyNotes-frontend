import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextFormField from '../TextField.jsx';
import AuthCardWrapper from './AuthCardWrapper.jsx';
import Loading from '../Loading.jsx';
import { useUpdatePasswordMutation } from '../../features/user/userApiSlice';

// Styled Typography
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
  color: theme.palette.secondary.main,
  textAlign: 'center',
  marginBottom: '10px',
  '&:hover': {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
}));

const UpdatePasswordSchema = yup.object({
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

const UpdatePassword = () => {
  const { token } = useParams();
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: UpdatePasswordSchema,
    onSubmit: (credentials) => {
      updatePassword({ token: token, ...credentials })
        .unwrap()
        .then((response) => toast.success(response.message))
        .then(() =>
          setTimeout(() => {
            navigate('/auth/login');
          }, 7000)
        )
        .catch((error) => {
          const errorMessage = error?.data?.message || 'An error occurred.';
          toast.error(errorMessage);
        });
    },
  });

  return (
    <>
      {isLoading ? (
        <Loading open={isLoading} />
      ) : (
        <AuthCardWrapper>
          <ToastContainer />
          <form onSubmit={formik.handleSubmit}>
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
              Update Password
            </Button>
          </form>
          <StyledTypography>
            <Link to='/auth/login'>Already have an Account? Login</Link>
          </StyledTypography>
        </AuthCardWrapper>
      )}
    </>
  );
};

export default UpdatePassword;
