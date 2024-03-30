import React, { useState, useEffect } from 'react';
import { StyledTagListContainer } from './TagList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../redux/tags/tagsSlice';
import TagListItem from '../TagListItem';
import TagListPagination from '../TagListPagination';
import TagFilterControls from '../TagFilterControls';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorDialog from '../common/ErrorDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from '@mui/material';

const TagList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [sortField, setSortField] = useState('popular');
  const [sortOrder, setSortOrder] = useState('desc');

  const dispatch = useDispatch();
  const {
    data: tagsData,
    isLoading,
    error,
  } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags({ page, pageSize, sortField, sortOrder }));
  }, [dispatch, page, pageSize, sortField, sortOrder]);

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

  if (isLoading) return <LoadingIndicator />;
  if (error)
    return (
      <ErrorDialog error={error} onClose={() => setPage((prev) => prev)} />
    );

  return (
    <StyledTagListContainer>
      <TagFilterControls
        pageSize={pageSize}
        sortField={sortField}
        sortOrder={sortOrder}
        onPageSizeChange={handlePageSizeChange}
        onSortFieldChange={handleSortFieldChange}
        onSortOrderChange={handleSortOrderChange}
        sortOrderOptions={sortOrderOptions}
      />
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
      <TagListPagination page={page} onPageChange={setPage} />
    </StyledTagListContainer>
  );
};

export default TagList;
