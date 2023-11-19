import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Loading from '../Loading';
import AuthCardWrapper from './AuthCardWrapper';
import VerifiedBg from '../../assets/verified-email.webp';
import '../../App.css';
import { useVerifyUserQuery } from '../../features/user/userApiSlice';

const VerifyEmail = () => {
  const { verficationToken } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } =
    useVerifyUserQuery(verficationToken);

  // Redirect the user to the login page when email is successfully verified
  React.useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate('/auth/login');
      }, 7000);
    }
  }, [data, navigate]);

  return (
    <>
      <AuthCardWrapper>
        <img src={VerifiedBg} alt='email-verified' className='img' />
        {isLoading && <Loading open={isLoading} />}
        {!isLoading && (
          <>
            <Typography
              sx={{ textAlign: 'center', color: isError ? 'red' : 'green' }}
            >
              {isError
                ? 'Email verification failed'
                : 'Email is verified! Please log in.'}
            </Typography>
            <Box sx={{ textAlign: 'center', m: 2 }}>
              <Link to='/auth/login'>
                <Button variant='contained' color='primary'>
                  Back to Login
                </Button>
              </Link>
            </Box>
          </>
        )}
      </AuthCardWrapper>
    </>
  );
};

export default VerifyEmail;
