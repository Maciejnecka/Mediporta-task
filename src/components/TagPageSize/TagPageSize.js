import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TagPageSize = ({ pageSize, onPageSizeChange }) => (
  <FormControl
    variant="outlined"
    size="small"
    style={{ margin: '10px', minWidth: '120px' }}
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
);

export default TagPageSize;
