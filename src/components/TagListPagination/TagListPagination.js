import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { StyledPagination } from './TagListPagination.styled';

const Pagination = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const initialPage = parseInt(pageNumber, 10) || 1;
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const newPage = parseInt(pageNumber, 10) || 1;
    if (page !== newPage) {
      setPage(newPage);
    }
  }, [pageNumber, page]);

  const onPageChange = (newPage) => {
    navigate(`/page/${newPage}`);
  };

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
