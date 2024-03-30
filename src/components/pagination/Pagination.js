import React from 'react';
import { Button } from '@mui/material';
import { StyledPagination } from './Pagination.styled';

const Pagination = ({ page, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(page + 1);
  };

  return (
    <StyledPagination style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onClick={handlePrevPage}
        disabled={page === 1}
        style={{ marginRight: '10px' }}
      >
        Previous
      </Button>
      <Button onClick={handleNextPage}>Next</Button>
    </StyledPagination>
  );
};

export default Pagination;
