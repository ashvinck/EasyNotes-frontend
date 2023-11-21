import React from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import { useDispatch } from 'react-redux';
import { logOut } from '../features/user/userSlice';

const StyledLogoutPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  cursor: 'pointer',
}));

const LogOutButton = ({ setAnchorEl, anchorEl }) => {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    setAnchorEl(null);
  };
  // Logout handler function
  const handleLogout = () => {
    console.log('Logout');
    dispatch(logOut());
  };

  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleOnClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        m: 1,
      }}
    >
      {/* ----- Popover contents ----- */}
      <StyledLogoutPaper onClick={handleLogout}>
        <LogoutOutlined color='secondary' sx={{ color: 'white', mx: 1 }} />
        <Typography>Logout</Typography>
      </StyledLogoutPaper>
    </Popover>
  );
};

export default LogOutButton;
