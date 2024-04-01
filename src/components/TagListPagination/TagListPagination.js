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

  const renderPageNumbers = () => {
    const pages = [];

    let startPage = page - 1;
    startPage = startPage < 1 ? 1 : startPage;

    for (let i = startPage; i <= startPage + 2; i++) {
      pages.push(
        <Button
          className="page__button"
          key={i}
          onClick={() => onPageChange(i)}
          disabled={page === i}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <StyledPagination>
      <Button onClick={handlePrevPage} disabled={page === 1}>
        Previous
      </Button>
      {renderPageNumbers()}
      <Button onClick={handleNextPage}>Next</Button>
    </StyledPagination>
  );
};

export default Pagination;
