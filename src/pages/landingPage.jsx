import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import easyNotesLogo from '../assets/easynoteslanding.webp';
import CardWrapper from '../components/CardWrapper';

const LandingPage = () => {
  return (
    <>
      <CardWrapper>
        <CardContent>
          <Typography sx={{ textAlign: 'center', m: 2 }} variant='h3'>
            Welcome to
          </Typography>
          <Typography sx={{ textAlign: 'center', m: 2 }} variant='h2'>
            Easy Notes
          </Typography>
          <Typography sx={{ textAlign: 'center', m: 3 }} variant='subtitle1'>
            Your Digital Note-Taking Companion.
          </Typography>
        </CardContent>
        <CardMedia
          component='img'
          image={easyNotesLogo}
          alt='logo'
          sx={{ maxHeight: '400px', maxWidth: '400px' }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            m: 2,
          }}
        >
          <CardActions>
            <Link to='/notes'>
              <Button variant='contained' color='primary'>
                Get Started
              </Button>
            </Link>
          </CardActions>
        </Box>
      </CardWrapper>
    </>
  );
};

export default LandingPage;
