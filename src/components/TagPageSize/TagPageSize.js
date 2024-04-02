import React from 'react';
import { FormControl, TextField } from '@mui/material';

const TagPageSize = ({ pageSize, onPageSizeChange }) => (
  <FormControl
    variant="outlined"
    size="small"
    style={{ margin: '10px', maxWidth: '100px' }}
  >
    <TextField
      label="Page Size"
      type="number"
      variant="outlined"
      size="small"
      value={pageSize}
      onChange={onPageSizeChange}
      inputProps={{ min: '10', max: '100', step: '10' }}
    />
  </FormControl>
);

export default TagPageSize;
