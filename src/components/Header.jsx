import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../assets/logo-48.png';

const LogoTypography = styled(Typography)(() => ({
  fontFamily: 'Pacifico, cursive',
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
}));

const LogoBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position='sticky' color='transparent' elevation={0}>
      <Container maxWidth='xxl'>
        <Toolbar disableGutters>
          <StyledBox>
            {/* --- Logo Button --- */}
            <LogoBox>
              <img src={logo} alt='logo' height='40' width='40' />
              <LogoTypography>Easy Notes</LogoTypography>
            </LogoBox>
            {/* --- Buttons ---- */}
            <Box>
              <Button
                variant='contained'
                sx={{ ml: 2 }}
                onClick={() => navigate('/auth/login')}
              >
                Login
              </Button>
              <Button
                variant='contained'
                sx={{ ml: 2 }}
                onClick={() => navigate('/auth/signup')}
              >
                SignUp
              </Button>
            </Box>
          </StyledBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
