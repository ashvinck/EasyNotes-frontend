import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';
import { useDeleteNoteMutation } from '../features/notes/notesApiSlice';

const DeleteDialog = ({ id, username, openDialog }) => {
  const [deleteNote, { isLoading }] = useDeleteNoteMutation();

  const handleClose = () => {
    openDialog((prev) => !prev);
  };

  const handleDeleteNote = () => {
    deleteNote({ id: id, username: username })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        const errMessage = err?.data?.message || 'An error occurred';
        toast.error(errMessage);
      });
    handleClose();
  };

  return (
    <>
      {isLoading ? (
        <Loading open={isLoading} />
      ) : (
        <>
          <ToastContainer />
          <Dialog open={true} onClose={handleClose}>
            <DialogTitle>Are you sure to delete note?</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleDeleteNote}>Delete Note</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default DeleteDialog;
