import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import { useGetAllNotesQuery } from '../../../features/notes/notesApiSlice';
import { useDispatch } from 'react-redux';
import { searchByCategory } from '../../../features/notes/notesSlice';

const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); // for identifying which category is selected

  const dispatch = useDispatch();

  const username = localStorage.getItem('username');

  // Getting data from API
  const { data, isLoading } = useGetAllNotesQuery(username);

  // Identifying which category is selected
  const handleListItemClick = (category) => {
    setSelectedIndex(category);
    dispatch(searchByCategory(category));
  };

  // To unselect a category
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
      <Typography
        variant='h6'
        sx={{ padding: theme.spacing(2), color: '#7a7a7a' }}
      >
        Categories
      </Typography>
      <Box sx={{ maxHeight: '550px', overflowY: 'auto' }}>
        {uniqueCategories?.map((category, index) => (
          <ListItemButton
            selected={selectedIndex === category}
            key={index}
            onClick={() => handleListItemClick(category)}
            onBlur={() => handleListItemBlur()}
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
      </Box>
    </>
  );
};

export default Categories;
