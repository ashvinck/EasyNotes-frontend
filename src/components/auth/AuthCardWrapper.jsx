import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/system/Box';

import CardWrapper from '../CardWrapper';
import logo from '../../assets/logo-48.png';
import Typography from '@mui/material/Typography';

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Pacifico, cursive',
  fontSize: '20px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '340px',
}));

const AuthCardWrapper = ({ children }) => {
  return (
    <CardWrapper>
      <StyledBox>
        <img src={logo} alt='logo' />
        <LogoTypography>Easy Notes</LogoTypography>
        <Box>{children}</Box>
      </StyledBox>
    </CardWrapper>
  );
};

export default AuthCardWrapper;
