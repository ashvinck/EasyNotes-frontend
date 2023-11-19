import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';

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

  const handleListItemClick = (event, category) => {
    setSelectedIndex(category);
  };

  const notesList = [
    {
      id: '1',
      title: 'This is the title',
      description: 'This is the description',
      category: 'Note-1',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-2',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-3',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-4',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-5',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-6',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-7',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-8',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-9',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-10',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-11',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-13',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'This is the description djcdj ',
      category: 'Note-14',
    },
  ];

  // To populate the list with the categories currently available
  const uniqueCategories = Array.from(
    new Set(notesList.map((note) => note.category))
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
