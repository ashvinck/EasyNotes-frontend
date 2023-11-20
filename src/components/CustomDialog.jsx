import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useUpdateCategoryMutation } from '../features/notes/notesApiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';

const CustomDialog = ({ id, username, openDialog }) => {
  const [category, setCategory] = useState('');
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  const handleClose = () => {
    openDialog((prev) => !prev);
  };

  const handleUpdateCategory = () => {
    const newCategory = {
      category: category,
    };
    updateCategory({
      id: id,
      username: username,
      category: newCategory,
    })
      .unwrap()
      .then((response) => toast.success(response.message))
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
            <DialogTitle>Update Category</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin='dense'
                id='category'
                label='Category'
                type='text'
                fullWidth
                variant='standard'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleUpdateCategory}>Update Category</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default CustomDialog;
