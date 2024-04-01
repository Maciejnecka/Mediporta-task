import { useState, useMemo } from 'react';

function useSortAndFilter(
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

  const handleSortFieldChange = (event) => {
    const newSortField = event.target.value;
    setSortField(newSortField);

    if (newSortField === 'name') {
      setSortOrder('asc');
    } else {
      setSortOrder('desc');
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

export default useSortAndFilter;
