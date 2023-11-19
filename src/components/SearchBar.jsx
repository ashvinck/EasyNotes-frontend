import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Hidden } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.light,
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  border: '1px solid #D3D3D3',
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleSearchBar = () => {
    setIsVisible(true);
  };

  return (
    <>
      <Hidden smDown>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search...'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Hidden>
      <Hidden smUp>
        <Search>
          <SearchIconWrapper onClick={handleToggleSearchBar}>
            <SearchIcon />
          </SearchIconWrapper>
          {isVisible && (
            <StyledInputBase
              placeholder='Search...'
              inputProps={{ 'aria-label': 'search' }}
            />
          )}
        </Search>
      </Hidden>
    </>
  );
};

export default SearchBar;
