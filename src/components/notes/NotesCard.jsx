import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomDialog from '../CustomDialog';
import DeleteDialog from '../deleteDialog';
import { useDispatch } from 'react-redux';
import { updateCurrentNoteId } from '../../features/notes/notesSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  cursor: 'pointer',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '20px',
  fontWeight: 'bold',
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Fira Sans, sans-serif',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '16px',
}));

const StyledTimeStamp = styled(Typography)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif',
  color: 'rgba(94,94,94,0.9)',
  fontSize: '12px',
  fontWeight: '500',
  paddingTop: theme.spacing(1),
}));

const ActionsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
}));

const NotesCard = ({ note }) => {
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);

  const username = localStorage.getItem('username');

  const handleUpdateCategory = () => {
    setCategoryDialogOpen(true);
  };

  const handleDeleteNote = () => {
    setDeleteDialogOpen(true);
  };

  const dispatch = useDispatch();

  const handleUpdateCurrentNoteId = (id) => {
    setCurrentNoteId(id);
    dispatch(updateCurrentNoteId(currentNoteId));
  };

  return (
    <StyledCard onClick={() => handleUpdateCurrentNoteId(note.id)}>
      <ToastContainer />
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <CardContent sx={{ pr: 1 }}>
            <StyledTitle variant='h6'>{note.title}</StyledTitle>
            <StyledDescription variant='subtitle1'>
              {note.description}
            </StyledDescription>
            <small>
              <StyledTimeStamp>
                {' '}
                Last Modified{' '}
                {new Date(note.timeStamp).toLocaleDateString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </StyledTimeStamp>
            </small>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions sx={{ height: '100%', pl: 0, pb: '16px', pt: '11px' }}>
            <ActionsBox>
              <IconButton onClick={() => handleUpdateCategory()}>
                <LocalOfferIcon sx={{ color: '#407bff' }} />
              </IconButton>
              <IconButton onClick={() => handleDeleteNote()}>
                <DeleteIcon sx={{ color: '#9c0c0c' }} />
              </IconButton>
            </ActionsBox>
          </CardActions>
        </Grid>
      </Grid>
      {categoryDialogOpen && (
        <CustomDialog
          id={note.id}
          username={username}
          openDialog={setCategoryDialogOpen}
        />
      )}
      {deleteDialogOpen && (
        <DeleteDialog
          id={note.id}
          username={username}
          openDialog={setDeleteDialogOpen}
        />
      )}
    </StyledCard>
  );
};

export default NotesCard;
