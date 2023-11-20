import React from 'react';
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/notes/sidebar/Sidebar.jsx';
import NotesList from '../components/notes/NotesList';
import AddNotes from '../components/notes/AddNotes';
import MobileHeader from '../components/mobileHeader.jsx';
import Box from '@mui/material/Box';
import CategoriesMob from '../components/categories.mobile.jsx';
import { useSelector } from 'react-redux';
import { selectToggleCategory } from '../features/notes/notesSlice.js';

const Notes = () => {
  const isVisible = useSelector(selectToggleCategory);

  return (
    <>
      <Hidden smDown>
        <Grid
          container
          spacing={0}
          sx={{
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            flexWrap: 'nowrap',
          }}
        >
          <Grid item md={3} lg={2}>
            <Sidebar />
          </Grid>
          <Grid item md={4} lg={3}>
            <NotesList />
          </Grid>
          <Grid item md={5} lg={7}>
            <AddNotes />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <MobileHeader />
        {isVisible && <CategoriesMob />}
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexGrow: 2,
              flexDirection: 'column',
              height: '100%',
              overflowY: 'auto',
              maxHeight: '60vh',
            }}
          >
            <NotesList />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <AddNotes />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Notes;
