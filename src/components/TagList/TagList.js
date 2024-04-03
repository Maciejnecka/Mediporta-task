import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledTagListContainer } from './TagList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../redux/tags/tagsSlice';
import Pagination from '../TagListPagination';
import TagFilterControls from '../TagFilterControls';
import LoadingIndicator from '../common/LoadingIndicator';
import ErrorDialog from '../common/ErrorDialog';
import useSort from '../hooks/useSort';
import TagTable from '../TagTable';

const TagList = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [invalidPage, setInvalidPage] = useState(false);

  const resetPage = () => {
    setPage(1);
    if (pageNumber !== '1') {
      navigate(`/page/1`);
    }
  };

  const {
    sortField,
    sortOrder,
    sortOrderOptions,
    handleSortFieldChange,
    handleSortOrderChange,
  } = useSort({ sortField: 'popular', sortOrder: 'desc' }, resetPage);

  const dispatch = useDispatch();
  const {
    data: tagsData,
    isLoading,
    error,
  } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags({ page, pageSize, sortField, sortOrder }));
  }, [dispatch, page, pageSize, sortField, sortOrder]);

  useEffect(() => {
    const newPage = parseInt(pageNumber, 10);
    if (!isNaN(newPage) && newPage > 0) {
      dispatch(fetchTags({ page: newPage, pageSize, sortField, sortOrder }));
      setInvalidPage(false);
    } else {
      setInvalidPage(true);
    }
  }, [dispatch, pageNumber, pageSize, sortField, sortOrder]);

  const handlePageSizeChange = (event) => {
    const TOTAL_ITEMS = 65717;
    const newPageSize = event.target.value;
    setPage(1);
    navigate(`/page/1`);

    const newTotalPages = Math.ceil(TOTAL_ITEMS / newPageSize);
    setPageSize(newPageSize);

    const newPage = Math.min(page, newTotalPages);
    if (page !== newPage) {
      setPage(newPage);
      navigate(`/page/${newPage}`);
    } else {
      dispatch(
        fetchTags({
          page: newPage,
          pageSize: newPageSize,
          sortField,
          sortOrder,
        })
      );
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/page/${newPage}`);
  };

  if (isLoading) return <LoadingIndicator />;
  if (error)
    return (
      <ErrorDialog error={error} onClose={() => setPage((prev) => prev)} />
    );
  if (invalidPage) {
    return (
      <ErrorDialog error={'Page not found'} onClose={() => navigate('/')} />
    );
  }

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
      <TagTable
        tagsData={tagsData}
        sortField={sortField}
        sortOrder={sortOrder}
        onSortFieldChange={handleSortFieldChange}
        onSortOrderChange={handleSortOrderChange}
      />
      <Pagination
        page={page}
        onPageChange={handlePageChange}
        totalItems={65717}
        pageSize={pageSize}
      />
    </StyledTagListContainer>
  );
};

export default TagList;
