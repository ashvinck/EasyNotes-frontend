import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import SearchBar from '../SearchBar';
import { Divider, Typography } from '@mui/material';
import NotesCard from './NotesCard';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  height: '100%',
  paddingTop: theme.spacing(3),
}));

const NotesList = () => {
  const notesList = [
    {
      id: '1',
      title: 'Untitled Note',
      description: 'This is the description',
      category: 'Note-1',
    },
    {
      id: '2',
      title: 'This is the thdh',
      description: 'Add A description to your note ',
      category: 'Note-2',
    },
  ];

  return (
    <StyledBox>
      <SearchBar />
      <Divider sx={{ m: 2 }} />
      {notesList.length === 0 ? (
        <Typography>Nothing to see here</Typography>
      ) : (
        notesList.map((note) => <NotesCard note={note} key={note.id} />)
      )}
    </StyledBox>
  );
};

export default NotesList;
