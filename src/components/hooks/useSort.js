import { useState, useMemo } from 'react';

function useSort(
  initialSettings = { sortField: 'popular', sortOrder: 'desc' },
  onSortChange
) {
  const [sortField, setSortField] = useState(initialSettings.sortField);
  const [sortOrder, setSortOrder] = useState(initialSettings.sortOrder);

  const sortOrderOptions = useMemo(() => {
    if (sortField === 'popular') {
      return [
        { value: 'desc', label: 'Descending' },
        { value: 'asc', label: 'Ascending' },
      ];
    } else {
      return [
        { value: 'asc', label: 'A - Z' },
        { value: 'desc', label: 'Z - A' },
      ];
    }
  }, [sortField]);

  const handleSortFieldChange = (newSortFieldOrEvent) => {
    const newSortField =
      typeof newSortFieldOrEvent === 'string'
        ? newSortFieldOrEvent
        : newSortFieldOrEvent.target.value;

    if (newSortField === sortField) {
      setSortOrder((currentSortOrder) =>
        currentSortOrder === 'asc' ? 'desc' : 'asc'
      );
    } else {
      setSortField(newSortField);
      if (newSortField === 'name') {
        setSortOrder('asc');
      } else {
        setSortOrder('desc');
      }
    }
    onSortChange();
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
    onSortChange();
  };

  return {
    sortField,
    sortOrder,
    sortOrderOptions,
    handleSortFieldChange,
    handleSortOrderChange,
  };
}

export default useSort;
