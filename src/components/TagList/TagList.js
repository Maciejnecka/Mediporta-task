import React, { useState, useEffect } from 'react';
import { StyledTagListContainer } from './TagList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../redux/tags/tagsSlice';
import TagListItem from '../TagListItem';
import TagListPagination from '../TagListPagination';
import TagFilterControls from '../TagFilterControls';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorDialog from '../common/ErrorDialog';
import useSortAndFilter from '../hooks/useSortAndFilter';
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

  const {
    sortField,
    sortOrder,
    sortOrderOptions,
    handleSortFieldChange,
    handleSortOrderChange,
  } = useSortAndFilter({ sortField: 'popular', sortOrder: 'desc' });

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
        sortOrderOptions={sortOrderOptions}
        onPageSizeChange={handlePageSizeChange}
        onSortFieldChange={handleSortFieldChange}
        onSortOrderChange={handleSortOrderChange}
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
