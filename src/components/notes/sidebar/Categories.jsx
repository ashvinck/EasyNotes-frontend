import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import { useGetAllNotesQuery } from '../../../features/notes/notesApiSlice';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../../../features/notes/notesSlice';

const StyledTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  color: '#7a7a7a',
  fontFamily: 'Raleway, sans-serif',
}));

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  maxHeight: '550px',
  overflowY: 'auto',
}));

const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();

  const username = localStorage.getItem('username');
  const { data, isLoading } = useGetAllNotesQuery(username);

  const handleListItemClick = (event, category) => {
    setSelectedIndex(category);
    dispatch(updateSearchTerm(category));
  };

  const handleListItemBlur = () => {
    setSelectedIndex(null);
  };

  // To populate the list with the categories currently available
  const uniqueCategories = Array.from(
    new Set(data?.map((note) => note.category))
  );

  const theme = useTheme();

  return (
    <>
      <StyledTypography variant='h6'>Categories</StyledTypography>
      <StyledBoxWrapper>
        {uniqueCategories.map((category, index) => (
          <ListItemButton
            selected={selectedIndex === category}
            key={index}
            onClick={(e) => handleListItemClick(e, category)}
            onBlur={handleListItemBlur}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#202020',
              },
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  selectedIndex === category
                    ? theme.palette.primary.dark
                    : 'white',
              }}
            >
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              primary={category}
              sx={{
                fontFamily: 'Raleway, sans-serif',
              }}
            />
          </ListItemButton>
        ))}
      </StyledBoxWrapper>
    </>
  );
};

export default Categories;
