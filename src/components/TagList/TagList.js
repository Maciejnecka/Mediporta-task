import React, { useState, useEffect } from 'react';
import { StyledTagListContainer } from './TagList.styled';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import TagListItem from '../TagListItem';
import useTags from '../../hooks/useTags';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorDialog from '../common/ErrorDialog';

const TagList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [sortField, setSortField] = useState('popular');
  const [sortOrder, setSortOrder] = useState('desc');

  const {
    data: tagsData,
    isLoading,
    error,
  } = useTags(page, pageSize, sortField, sortOrder);

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
    setPage(1);
  };

  useEffect(() => {
    if (sortField === 'name') {
      setSortOrder('asc');
    } else {
      setSortOrder('desc');
    }
  }, [sortField]);

  const sortOrderOptions =
    sortField === 'popular'
      ? [
          { value: 'desc', label: 'Descending' },
          { value: 'asc', label: 'Ascending' },
        ]
      : [
          { value: 'asc', label: 'A - Z' },
          { value: 'desc', label: 'Z - A' },
        ];

  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isLoading) return <LoadingIndicator />;
  if (error)
    return (
      <ErrorDialog error={error} onClose={() => setPage((prev) => prev)} />
    );

  return (
    <StyledTagListContainer>
      <FormControl
        variant="outlined"
        size="small"
        style={{ margin: '10px', minWidth: '15%' }}
      >
        <InputLabel>Page Size</InputLabel>
        <Select
          value={pageSize}
          onChange={handlePageSizeChange}
          label="Page Size"
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        size="small"
        style={{ margin: '10px', minWidth: '15%' }}
      >
        <InputLabel>Sort Field</InputLabel>
        <Select
          value={sortField}
          onChange={handleSortFieldChange}
          label="Sort Field"
        >
          <MenuItem value="popular">Popularity</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        size="small"
        style={{ margin: '10px', minWidth: '15%' }}
      >
        <InputLabel>Sort Order</InputLabel>
        <Select
          value={sortOrder}
          onChange={handleSortOrderChange}
          label="Sort Order"
        >
          {sortOrderOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'name'}
                  direction={
                    sortField === 'name'
                      ? sortOrder === 'asc'
                        ? 'desc'
                        : 'asc'
                      : 'asc'
                  }
                >
                  Tag Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={sortField === 'popular'}
                  direction={sortField === 'popular' ? sortOrder : 'desc'}
                >
                  Post Count
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tagsData?.items.map((tag) => (
              <TagListItem key={tag.name} tag={tag} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      >
        <Button
          onClick={handlePrevPage}
          disabled={page === 1}
          style={{ marginRight: '10px' }}
        >
          Previous
        </Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </StyledTagListContainer>
  );
};

export default TagList;
