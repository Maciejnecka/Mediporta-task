import React from 'react';
import { Button } from '@mui/material';
import { StyledPagination } from './TagListPagination.styled';

const Pagination = ({ page, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(page + 1);
  };

  return (
    <StyledPagination>
      <Button onClick={handlePrevPage} disabled={page === 1}>
        Previous
      </Button>
      <Button onClick={handleNextPage}>Next</Button>
    </StyledPagination>
  );
};

export default Pagination;
