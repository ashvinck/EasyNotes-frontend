import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../features/notes/notesSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  border: '1px solid #D3D3D3',
  width: 'auto',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
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
  const dispatch = useDispatch();
  const handleSearchQuery = (event) => {
    const searchValue = event.target.value;
    dispatch(updateSearchTerm(searchValue));
  };
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search...'
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchQuery}
        />
      </Search>
    </>
  );
};

export default SearchBar;
