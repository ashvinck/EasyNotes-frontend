import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import SidebarLinks from './SidebarLinks';
import Divider from '@mui/material/Divider';
import Categories from './Categories';
import Account from './Account';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  height: '100%',
  color: 'rgb(208,208,208)',
  paddingTop: theme.spacing(3),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: '#949494',
  marginTop: theme.spacing(3),
}));

const Sidebar = () => {
  return (
    <StyledBoxWrapper>
      <SidebarLinks />
      <StyledDivider />
      <Categories />
      <StyledDivider />
      <Account />
    </StyledBoxWrapper>
  );
};

export default Sidebar;
