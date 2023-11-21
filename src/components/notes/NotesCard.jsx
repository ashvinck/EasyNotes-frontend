import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentNoteId,
  updateCurrentNoteId,
} from '../../features/notes/notesSlice';

const StyledTitle = styled(Typography)(({ theme }) => ({
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

  const theme = useTheme();

  const username = localStorage.getItem('username');
  const activeNote = useSelector(selectCurrentNoteId);

  const handleUpdateCategory = () => {
    setCategoryDialogOpen(true);
  };

  const handleDeleteNote = () => {
    setDeleteDialogOpen(true);
  };

  const dispatch = useDispatch();

  const handleUpdateCurrentNoteId = (id) => {
    dispatch(updateCurrentNoteId(id));
  };

  return (
    <Card
      sx={{
        cursor: 'pointer',
        margin: 1,
        backgroundColor:
          activeNote === note.id ? theme.palette.primary.light : 'white',
      }}
      onClick={() => handleUpdateCurrentNoteId(note.id)}
    >
      <ToastContainer />
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <CardContent sx={{ pr: 1 }}>
            {/* ---- Title ------- */}
            <StyledTitle variant='h6'>{note.title}</StyledTitle>
            {/* ----- Description ----- */}
            <StyledDescription variant='subtitle1'>
              {note.description}
            </StyledDescription>
            {/* ---- Last Modified ------ */}
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
        {/* ------ Actions ------- */}
        <Grid item xs={2}>
          <CardActions sx={{ height: '100%', pl: 0, pb: '16px', pt: '11px' }}>
            <ActionsBox>
              {/* ------- Add Category --------- */}
              <IconButton onClick={() => handleUpdateCategory()}>
                <LocalOfferIcon sx={{ color: '#407bff' }} />
              </IconButton>
              {/* --------- Delete Note ------- */}
              <IconButton onClick={() => handleDeleteNote()}>
                <DeleteIcon sx={{ color: '#9c0c0c' }} />
              </IconButton>
            </ActionsBox>
          </CardActions>
        </Grid>
      </Grid>
      {/* ----- Add Category Dialogue -------- */}
      {categoryDialogOpen && (
        <CustomDialog
          id={note.id}
          username={username}
          openDialog={setCategoryDialogOpen}
        />
      )}
      {/* ------ Delete Dialogue ------- */}
      {deleteDialogOpen && (
        <DeleteDialog
          id={note.id}
          username={username}
          openDialog={setDeleteDialogOpen}
        />
      )}
    </Card>
  );
};

export default NotesCard;
