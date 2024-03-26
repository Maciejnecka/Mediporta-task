import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const TagListItem = ({ tag }) => {
  return (
    <TableRow>
      <TableCell>{tag.name}</TableCell>
      <TableCell align="right">{tag.count}</TableCell>
    </TableRow>
  );
};

export default TagListItem;
