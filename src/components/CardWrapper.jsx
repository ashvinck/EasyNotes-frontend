import React from 'react';
import Box from '@mui/material/Box';
import bgImage from '../assets/background-image.webp';

const CardWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backgroundRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5.5px)',
          WebkitBackdropFilter: 'blur(5.5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '10px',
        }}
        elevation={3}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CardWrapper;
