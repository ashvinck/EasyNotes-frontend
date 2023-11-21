import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from './SearchBar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAddNewNoteMutation } from '../features/notes/notesApiSlice';
import { useDispatch } from 'react-redux';
import {
  searchByCategory,
  toggleCategory,
  updateSearchTerm,
} from '../features/notes/notesSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogOutButton from './LogOutButton';
import { Divider } from '@mui/material';
uuidv4();

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  padding: theme.spacing(2),
}));

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const StyledIconButton = styled(IconButton)(({ theme, isSelected }) => ({
  color: isSelected ? 'white' : '#000000',
  backgroundColor: isSelected ? theme.palette.primary.dark : 'transparent',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
  },
}));

const MobileHeader = () => {
  const [addNewNote, { isLoading }] = useAddNewNoteMutation();
  const username = localStorage.getItem('username');

  const dispatch = useDispatch();
  const [showCategories, setShowCategories] = useState(false);

  const [selectedButton, setSelectedButton] = useState(null);
  const [accountIconAnchorEl, setAccountIconAnchorEl] = useState(null);

  const handleAddNoteClick = () => {
    const newNote = {
      id: uuidv4(),
      timeStamp: Date.now(),
      title: 'Untitled Note',
      description: 'Type in to add description',
      category: 'Notes',
      username: username,
    };
    addNewNote({ username: username, notesData: newNote })
      .unwrap()
      .then((response) => toast.success(response.message))
      .catch((err) => {
        const errorMessage = err?.data?.message || 'An error occurred';
        toast.error(errorMessage);
      });
  };

  const handleButtonClick = (buttonid) => {
    setSelectedButton(buttonid);
  };

  const handleViewAllNotes = () => {
    dispatch(searchByCategory(''));
    dispatch(updateSearchTerm(''));
    dispatch(toggleCategory(!showCategories));
  };

  const handleSortClick = () => {
    setShowCategories(!showCategories);
    dispatch(toggleCategory(!showCategories));
  };
  const handleAccountClick = (event) => {
    setAccountIconAnchorEl(event.currentTarget);
  };

  const icons = [
    {
      id: 'add',
      icon: <AddIcon />,
      onClick: () => {
        handleButtonClick('add');
        handleAddNoteClick();
      },
    },
    {
      id: 'list',
      icon: <FormatListBulletedIcon />,
      onClick: () => {
        handleButtonClick('list');
        handleViewAllNotes();
      },
    },
    {
      id: 'filter',
      icon: <FilterAltIcon />,
      onClick: () => {
        handleButtonClick('filter');
        handleSortClick();
      },
    },
    {
      id: 'account',
      icon: <AccountCircleIcon />,
      onClick: (e) => {
        handleButtonClick('account');
        handleAccountClick(e);
      },
    },
  ];

  return (
    <>
      <StyledBox>
        <ToastContainer />
        <StyledWrapper>
          <SearchBar />
        </StyledWrapper>
        <StyledWrapper>
          {icons.map(({ id, icon, onClick }) => (
            <StyledIconButton
              key={id}
              selected={selectedButton === id}
              onClick={onClick}
            >
              {icon}
            </StyledIconButton>
          ))}
          <LogOutButton
            setAnchorEl={setAccountIconAnchorEl}
            anchorEl={accountIconAnchorEl}
          />
        </StyledWrapper>
      </StyledBox>
      <Divider />
    </>
  );
};

export default MobileHeader;
