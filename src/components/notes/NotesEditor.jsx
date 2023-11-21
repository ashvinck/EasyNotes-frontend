import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import {
  useGetNoteByIdQuery,
  useUpdateNoteMutation,
} from '../../features/notes/notesApiSlice';
import { selectCurrentNoteId } from '../../features/notes/notesSlice';

// Wrapper for the component
const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: '3px solid #D3D3D3',
  height: '100%',
  borderRadius: '5px',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}));

const UpdateNotes = () => {
  // to focus on the text editor when a note is clicked
  const textAreaRef = useRef(null);

  // to get the selected noteId (from redux store);
  const id = useSelector(selectCurrentNoteId);
  // Retrieve the username from local storage (for authentication purposes)
  const username = localStorage.getItem('username');

  // Getting note corresponding to the selected Id and user from api
  const { data, isLoading } = useGetNoteByIdQuery({ id, username });

  const [updateNote] = useUpdateNoteMutation();

  // handle save on blur event
  const handleSave = () => {
    updateCurrentNote();
  };

  // To update the note
  const updateCurrentNote = () => {
    const text = textAreaRef.current?.value;
    if (text) {
      const title = extractTitle(text);
      const description = text.replace(title + '\n', '');

      const updatedData = {
        timeStamp: Date.now(),
        title: title,
        description: description,
        category: data[0]?.category || 'Note-1',
      };
      updateNote({
        id: id,
        username: username,
        notesData: updatedData,
      })
        .unwrap()
        .catch((err) => {
          const errMessage = err?.data?.message || 'An error occurred';
          toast.error(errMessage);
        });
    }
    // To prevent save the previous info to new note
    textAreaRef.current.value = '';
  };

  const extractTitle = (text) => {
    const firstLine = text.trim().split('\n')[0];
    return firstLine || 'Untitled';
  };

  // To populate the textarea
  useEffect(() => {
    textAreaRef.current.value = '';
    if (textAreaRef.current && data?.length > 0) {
      textAreaRef.current.value = data[0]?.title + '\n' + data[0]?.description;
    }
  }, [data]);

  // To focus the text area onclicking note card
  //{ Functionality mainly used in small screen devices only }
  useEffect(() => {
    if (id && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [id]);

  return (
    <StyledBoxWrapper>
      <ToastContainer />
      <textarea
        ref={textAreaRef}
        placeholder='Start Writing here...'
        onBlur={handleSave}
        defaultValue={data?.description || ''}
      />
    </StyledBoxWrapper>
  );
};

export default UpdateNotes;
{
}
