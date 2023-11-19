import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../features/user/userSlice';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(1),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Source Code Pro, monospace',
  fontWeight: 'bold',
  paddingLeft: theme.spacing(1),
  color: 'white',
}));

const StyledLogoutPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
}));

const Account = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  // Logout handler function
  const handleLogout = () => {
    console.log('Logout');
    setAnchorEl(null);
    dispatch(logOut());
  };

  return (
    <StyledBoxWrapper>
      <AccountCircleIcon fontSize='large' color='primary' />
      <StyledTypography>Ashvin C K</StyledTypography>
      <IconButton onClick={handleClick}>
        <ExpandMoreIcon sx={{ color: 'white' }} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleLogout}
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
    </StyledBoxWrapper>
  );
};

export default Account;
