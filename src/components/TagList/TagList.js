import React, { useState } from 'react';
import { StyledTagListContainer } from './TagList.styled';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import TagListItem from '../TagListItem';
import useTags from '../../hooks/useTags';

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
  };

  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isLoading)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </div>
    );
  if (error) {
    return (
      <Dialog
        open={Boolean(error)}
        onClose={() => setPage((prev) => prev)}
        aria-labelledby="error-dialog-title"
        aria-describedby="error-dialog-description"
      >
        <DialogTitle id="error-dialog-title">{'An Error Occurred'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="error-dialog-description">
            Unfortunately, an error has occurred: {error.message} Please try
            refreshing the page or contact support if the issue persists.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPage((prev) => prev)} color="primary">
            Retry
          </Button>
          <Button
            onClick={() => window.location.reload()}
            color="primary"
            autoFocus
          >
            Refresh
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <StyledTagListContainer>
      <FormControl variant="outlined" size="small" style={{ margin: '15px' }}>
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

      <FormControl variant="outlined" size="small" style={{ margin: '10px' }}>
        <InputLabel>Sort Order</InputLabel>
        <Select
          value={sortOrder}
          onChange={handleSortOrderChange}
          label="Sort Order"
        >
          <MenuItem value="desc">Descending</MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" size="small" style={{ margin: '10px' }}>
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tag Name</TableCell>
              <TableCell align="right">Post Count</TableCell>
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
