import React from 'react';
import Box from '@mui/system/Box';
import CardWrapper from '../CardWrapper';
import logo from '../../assets/logo-48.png';
import Typography from '@mui/material/Typography';

const AuthCardWrapper = ({ children }) => {
  return (
    <CardWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '340px',
          p: 3,
        }}
      >
        <img src={logo} alt='logo' />
        <Typography sx={{ fontFamily: 'Pacifico, cursive', fontSize: '25px' }}>
          Easy Notes
        </Typography>
        <Box>{children}</Box>
      </Box>
    </CardWrapper>
  );
};

export default AuthCardWrapper;
