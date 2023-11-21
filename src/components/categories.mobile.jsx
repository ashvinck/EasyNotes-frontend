import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByCategory } from '../features/notes/notesSlice';
import styled from '@emotion/styled';
import { useGetAllNotesQuery } from '../features/notes/notesApiSlice';

const StyledWrapper = styled(Box)(({ theme }) => ({
  margin: '10px 10px 10px 15px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  maxHeight: '200px',
  display: 'flex',
  overflow: 'auto',
  gap: '10px',
  padding: '0px 10px 0px 0px',
  marginLeft: theme.spacing(1),
}));

const StyledCardContainer = styled(Box)(({ theme }) => ({
  flex: '0 0 auto',
  width: 'fit-content',
  maxWidth: '100%',
}));

const StyledCard = styled(Card)(({ theme, category, active }) => ({
  padding: '5px',
  marginBottom: theme.spacing(2),
  backgroundColor:
    active === category
      ? theme.palette.primary.dark
      : theme.palette.primary.light,
  cursor: 'pointer',
}));

const CategoriesMob = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const username = localStorage.getItem('username');
  const { data, isLoading } = useGetAllNotesQuery(username);

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(searchByCategory(category));
    setActiveCategory(category);
  };

  // To populate the list with the categories currently available
  const uniqueCategories = Array.from(
    new Set(data?.map((note) => note?.category))
  );

  return (
    <>
      <StyledWrapper>
        <Typography sx={{ color: 'rgb(122, 122, 122)' }}>Categories</Typography>
      </StyledWrapper>
      <StyledBox>
        {uniqueCategories?.map((category, index) => (
          <StyledCardContainer key={index}>
            <StyledCard
              key={index}
              category={category}
              active={activeCategory}
              onClick={() => handleCategoryClick(category)}
            >
              <Typography sx={{ fontFamily: 'Source Code Pro, monospace' }}>
                {category}
              </Typography>
            </StyledCard>
          </StyledCardContainer>
        ))}
      </StyledBox>
    </>
  );
};

export default CategoriesMob;
