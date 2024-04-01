import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from '@mui/material';
import TagListItem from '../TagListItem';

const TagTable = ({ tagsData, sortField, sortOrder, onSortFieldChange }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortField === 'name'}
                direction={sortField === 'name' ? sortOrder : 'asc'}
                onClick={() => onSortFieldChange('name')}
              >
                Tag Name
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={sortField === 'popular'}
                direction={sortField === 'popular' ? sortOrder : 'desc'}
                onClick={() => onSortFieldChange('popular')}
              >
                Post Count
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tagsData?.items.map((tag) => (
            <TagListItem key={tag.name} tag={tag} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagTable;
