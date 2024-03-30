import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TagFilterControls = ({
  pageSize,
  sortField,
  sortOrder,
  onPageSizeChange,
  onSortFieldChange,
  onSortOrderChange,
  sortOrderOptions,
}) => (
  <>
    <FormControl
      variant="outlined"
      size="small"
      style={{ margin: '10px', minWidth: '15%' }}
    >
      <InputLabel>Page Size</InputLabel>
      <Select value={pageSize} onChange={onPageSizeChange} label="Page Size">
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
      <Select value={sortField} onChange={onSortFieldChange} label="Sort Field">
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
      <Select value={sortOrder} onChange={onSortOrderChange} label="Sort Order">
        {sortOrderOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </>
);

export default TagFilterControls;
