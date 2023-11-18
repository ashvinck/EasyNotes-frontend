import React from 'react'
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import bgImage from '../assets/background-image.webp';


// Styled Box
const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: `calc(100vh - 70px)`,
}));

// Styled Paper
const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
}));

// Styled Card
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundImage: `url(${bgImage})`,
}));

const CardWrapper = ({children}) => {
  return (
    <StyledBox>
      <StyledPaper elevation={3}>
        <StyledCard variant='outlined'>
         {children}
        </StyledCard>
      </StyledPaper>
    </StyledBox>
  )
}

export default CardWrapper;