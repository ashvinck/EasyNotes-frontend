import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import SearchBar from '../SearchBar';
import NotesCard from './NotesCard';
import { useGetAllNotesQuery } from '../../features/notes/notesApiSlice';
import {
  selectSearchCategory,
  selectSearchTerm,
} from '../../features/notes/notesSlice';

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
  const categorySearchTerm = useSelector(selectSearchCategory);
  const searchQuery = searchTerm.toLowerCase();

  const notesList = categorySearchTerm
    ? data?.filter((note) => {
        const categoryIncludesQuery =
          note?.category && note?.category.includes(categorySearchTerm);
        return categoryIncludesQuery;
      })
    : searchQuery
    ? data?.filter((note) => {
        const titleIncludesQuery = note?.title
          .toLowerCase()
          .includes(searchQuery);
        const descriptionIncludesQuery = note?.description
          .toLowerCase()
          .includes(searchQuery);
        return titleIncludesQuery || descriptionIncludesQuery;
      })
    : data;

  return (
    <StyledBox>
      <Hidden mdDown>
        <SearchBar />
        <Divider sx={{ m: 2 }} />
      </Hidden>

      {isLoading ? (
        <Typography sx={{ textAlign: 'center' }}>Loading ...</Typography>
      ) : (
        <>
          {notesList?.length === 0 ? (
            <Typography sx={{ textAlign: 'center' }}>
              Nothing to see here
            </Typography>
          ) : (
            notesList?.map((note) => <NotesCard note={note} key={note.id} />)
          )}
        </>
      )}
    </StyledBox>
  );
};

export default NotesList;
