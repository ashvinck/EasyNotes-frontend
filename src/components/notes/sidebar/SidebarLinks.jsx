import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import { useTheme } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddNewNoteMutation } from '../../../features/notes/notesApiSlice';
import Loading from '../../Loading';
import { useDispatch } from 'react-redux';
import {
  searchByCategory,
  updateSearchTerm,
} from '../../../features/notes/notesSlice';

const SidebarLinks = () => {
  const [addnewNote, { isLoading }] = useAddNewNoteMutation();
  const username = localStorage.getItem('username');
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (id) => {
    setSelectedIndex(id);
  };

  const handleViewAllNotes = () => {
    dispatch(searchByCategory(''));
    dispatch(updateSearchTerm(''));
  };

  const handleListItemBlur = () => {
    setSelectedIndex(null);
  };

  const handleAddNoteClick = () => {
    const newNote = {
      id: uuidv4(),
      timeStamp: Date.now(),
      title: 'Untitled Note',
      description: 'Type in to add description',
      category: 'Notes',
      username: username,
    };
    addnewNote({ username: username, notesData: newNote })
      .unwrap()
      .then((response) => toast.success(response.message))
      .catch((err) => {
        const errorMessage = err?.data?.message || 'An error occurred';
        toast.error(errorMessage);
      });
  };

  const theme = useTheme();
  const items = [
    {
      id: 'addNote',
      icon: <AddIcon />,
      title: 'Add New Note',
      onClick: () => {
        handleListItemClick('addNote');
        handleAddNoteClick();
      },
    },
    {
      id: 'viewAllNotes',
      icon: <FormatListBulletedIcon />,
      title: 'Notes List',
      onClick: () => {
        handleListItemClick('viewAllNotes');
        handleViewAllNotes();
      },
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loading open={isLoading} />
      ) : (
        <>
          <ToastContainer />
          {items.map(({ id, icon, title, onClick }) => (
            <ListItemButton
              selected={selectedIndex === id}
              key={id}
              onClick={onClick}
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
                    selectedIndex === id ? theme.palette.primary.dark : 'white',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          ))}
        </>
      )}
    </>
  );
};

export default SidebarLinks;
