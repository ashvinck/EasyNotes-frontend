import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Loading = (open) => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open.open}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <CircularProgress />
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant='paragraph'>Please wait...</Typography>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default Loading;
