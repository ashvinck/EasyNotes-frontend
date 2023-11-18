import React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// For Error Messages
const StyledTypography = styled(Typography)(() => ({
  color: '#ff6363',
  wordWrap: 'break-word',
  fontSize: 'small',
  textAlign: 'center',
  maxWidth: '340px',
}));

// Text Field for all input fields
const TextFormField = ({
  id,
  label,
  name,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  return (
    <>
      <TextField
        required
        type='text'
        variant='outlined'
        margin='dense'
        color='secondary'
        id={id}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        fullWidth
        focused
        sx={{ my: 2 }}
      />
      <Box sx={{ width: '320px', mb: 1 }}>
        {touched && error && <StyledTypography>{error}</StyledTypography>}
      </Box>
    </>
  );
};

export default TextFormField;
