import React from 'react';
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/notes/sidebar/Sidebar.jsx';
import NotesList from '../components/notes/NotesList';
import AddNotes from '../components/notes/AddNotes';

const Notes = () => {
  return (
    <>
      <Hidden smDown>
        <Grid
          container
          spacing={0}
          sx={{
            minHeight: '100vh',
            minWidth: '100vw',
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
    </>
  );
};

export default Notes;
