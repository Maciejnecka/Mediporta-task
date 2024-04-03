import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, FormControl, Box } from '@mui/material';
import { StyledPagination } from './TagListPagination.styled';

const Pagination = ({ totalItems, pageSize }) => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const initialPage = parseInt(pageNumber, 10) || 1;
  const [page, setPage] = useState(initialPage);
  const [gotoPage, setGotoPage] = useState('');

  useEffect(() => {
    const newPage = parseInt(pageNumber, 10) || 1;
    setPage(newPage);
  }, [pageNumber]);

  const totalPages = Math.ceil(totalItems / pageSize);

  const onPageChange = (newPage) => {
    navigate(`/page/${newPage}`);
  };

  const onGotoPageChange = (event) => {
    setGotoPage(event.target.value);
  };

  const onGotoPageSubmit = (event) => {
    event.preventDefault();
    const pageNum = Math.max(1, Math.min(totalPages, parseInt(gotoPage, 10)));
    if (!isNaN(pageNum) && pageNum !== page) {
      onPageChange(pageNum);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(page - 1, 1);
    let endPage = startPage + 2 <= totalPages ? startPage + 2 : totalPages;

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Button
          className="page__button"
          key={i}
          onClick={() => onPageChange(i)}
          disabled={page === i}
          sx={{ mx: 1 }}
        >
          {i}
        </Button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <Button
          className="page__button--dots"
          key="ellipsis"
          disabled
          sx={{ mx: 0 }}
        >
          ...
        </Button>,
        <Button
          className="page__button"
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          sx={{ mx: 1 }}
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  return (
    <>
      <StyledPagination>
        <Button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        {renderPageNumbers()}
        <Button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </Button>
      </StyledPagination>
      <Box
        component="form"
        onSubmit={onGotoPageSubmit}
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormControl sx={{ m: 1, width: 'auto' }}>
          <TextField
            label="Go to page"
            type="number"
            variant="outlined"
            size="small"
            value={gotoPage}
            onChange={onGotoPageChange}
            inputProps={{ min: 1, max: totalPages }}
            sx={{ width: 130 }}
          />
        </FormControl>
        <Button type="submit" sx={{ mt: 'auto', mb: 'auto' }}>
          Go
        </Button>
      </Box>
    </>
  );
};

export default Pagination;
