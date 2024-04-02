import React from 'react';
import { FormControl, TextField } from '@mui/material';

const TagPageSize = ({ pageSize, onPageSizeChange }) => {
  const handlePageSizeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);

    if (newValue >= 10 && newValue <= 100 && newValue % 10 === 0) {
      onPageSizeChange(event);
    }
  };

  return (
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
        onChange={handlePageSizeChange}
        inputProps={{
          min: '10',
          max: '100',
          step: '10',
        }}
      />
    </FormControl>
  );
};

export default TagPageSize;
