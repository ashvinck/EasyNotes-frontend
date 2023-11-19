import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const SidebarLinks = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, id) => {
    setSelectedIndex(id);
  };

  const theme = useTheme();
  const items = [
    {
      id: 'addNote',
      icon: <AddIcon />,
      title: 'Add New Note',
    },
    {
      id: 'viewAllNotes',
      icon: <FormatListBulletedIcon />,
      title: 'Notes List',
    },
  ];

  return (
    <>
      {items.map(({ id, icon, title }) => (
        <ListItemButton
          selected={selectedIndex === id}
          key={id}
          onClick={(e) => handleListItemClick(e, id)}
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
          <ListItemText
            primary={title}
            sx={{
              fontFamily: 'Raleway, sans-serif',
            }}
          />
        </ListItemButton>
      ))}
    </>
  );
};

export default SidebarLinks;
