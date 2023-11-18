import React from 'react';
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../assets/logo-48.png';

const LogoTypography = styled(Typography)(({ theme }) => ({
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
  return (
    <AppBar position='sticky' color='transparent'>
      <Container maxWidth='xxl'>
        <Toolbar disableGutters>
          <StyledBox>
            {/* --- Logo Button --- */}
              <LogoBox>
                <img src={logo} alt='logo' height='40' width='40' />
                <LogoTypography>Easy Notes</LogoTypography>
              </LogoBox>
            {/* --- Buttons ---- */}
            <Button variant='contained'>Login</Button>
          </StyledBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
