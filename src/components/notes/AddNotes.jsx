import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: '3px solid #D3D3D3',
  height: '100%',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
}));

const AddNotes = () => {
  // to focus on the text editor when sidebar link is clicked
  const textAreaRef = useRef(null);

  const [content, setContent] = useState('');

  const saveNote = () => {
    const text = textAreaRef.current?.value;
    if (text) {
      const { title, description } = extractTitleAndDescription(text);

      const newNote = {
        id: uuidv4(),
        timeStamp: Date.now(),
        title: title,
        description: description,
        category: 'Note-1',
      };
      console.log(newNote);
    }
  };

  function extractTitleAndDescription(html) {
    const div = document.createElement('div');
    div.innerHTML = html;

    const children = Array.from(div.children);

    // Extracting the title from the first child
    const title =
      children.length > 0 ? children[0].textContent.trim() : 'Untitled';

    // Extracting the description from the remaining children
    const description = children
      .slice(1)
      .map((child) => child.outerHTML)
      .join('');

    return { title, description };
  }

  // handle save on blur event
  const handleSave = () => {
    saveNote();
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'code-block',
    'list',
    'bullet',
    'indent',
    'align',
  ];

  return (
    <StyledBoxWrapper>
      <ReactQuill
        modules={modules}
        formats={formats}
        theme='snow'
        value={content}
        onChange={(value) => setContent(value)}
        onBlur={handleSave}
        ref={textAreaRef}
      />
    </StyledBoxWrapper>
  );
};

export default AddNotes;
