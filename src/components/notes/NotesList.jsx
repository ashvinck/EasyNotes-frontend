import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import SearchBar from '../SearchBar';
import { Divider, Hidden, Typography } from '@mui/material';
import NotesCard from './NotesCard';
import { useGetAllNotesQuery } from '../../features/notes/notesApiSlice';
import { useSelector } from 'react-redux';
import { selectSearchTerm } from '../../features/notes/notesSlice';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  height: '100%',
  flex: 1,
  paddingTop: theme.spacing(3),
}));

const NotesList = () => {
  const username = localStorage.getItem('username');
  const { data, isLoading } = useGetAllNotesQuery(username);

  const searchTerm = useSelector(selectSearchTerm);
  const searchQuery = searchTerm.toLowerCase();

  const notesList = searchQuery
    ? data.filter((note) => {
        const titleIncludesQuery = note.title
          .toLowerCase()
          .includes(searchQuery);
        const descriptionIncludesQuery = note.description
          .toLowerCase()
          .includes(searchQuery);
        const categoryIncludesQuery =
          note.category && note.category.toLowerCase().includes(searchQuery);

        return (
          titleIncludesQuery ||
          descriptionIncludesQuery ||
          categoryIncludesQuery
        );
      })
    : data;

  return (
    <StyledBox>
      <Hidden smDown>
        <SearchBar />
        <Divider sx={{ m: 2 }} />
      </Hidden>

      {notesList?.length === 0 ? (
        <Typography
          sx={{ textAlign: 'center', fontFamily: 'Source Code Pro, monospace' }}
        >
          Nothing to see here
        </Typography>
      ) : (
        notesList?.map((note) => <NotesCard note={note} key={note.id} />)
      )}
    </StyledBox>
  );
};

export default NotesList;
