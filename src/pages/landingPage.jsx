import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import easyNotesLogo from '../assets/easynoteslanding.webp';
import CardWrapper from '../components/CardWrapper';
import Header from '../components/Header';

const StyledName = styled(Typography)(({ theme }) => ({
  fontFamily: 'Pacifico, cursive',
  textAlign: 'center',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Source Code Pro, monospace',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

const StyledActionBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LandingPage = () => {
  return (
    <>
      <Header />
      <CardWrapper>
        <CardContent>
          <StyledTitle variant='h3'>Welcome to</StyledTitle>
          <StyledName variant='h2'>Easy Notes</StyledName>
          <StyledDescription variant='subtitle1'>
            Your Digital Note-Taking Companion.
          </StyledDescription>
        </CardContent>
        <CardMedia
          component='img'
          image={easyNotesLogo}
          alt='logo'
          sx={{ maxHeight: '400px', maxWidth: '400px' }}
        />
        <StyledActionBox>
          <CardActions>
            <Button variant='contained' color='primary'>
              Get Started
            </Button>
          </CardActions>
        </StyledActionBox>
      </CardWrapper>
    </>
  );
};

export default LandingPage;
