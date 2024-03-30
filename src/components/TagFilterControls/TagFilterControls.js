import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import TagPageSize from '../TagPageSize';

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
    <TagPageSize pageSize={pageSize} onPageSizeChange={onPageSizeChange} />
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
