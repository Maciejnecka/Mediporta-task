import { useState } from 'react';

function useFilter(initialFilters) {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (filterType, newValue) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [filterType]: newValue,
    }));
  };

  return { filters, handleFilterChange };
}

export default useFilter;
