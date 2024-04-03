import React from 'react';
import TagFilterControls from '../components/TagFilterControls';
import TagPageSize from '../components/TagPageSize';

export default {
  title: 'Components/TagFilterControls',
  component: TagFilterControls,
  subcomponents: { TagPageSize },
  argTypes: {
    pageSize: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    sortField: {
      control: { type: 'select', options: ['popular', 'name'] },
      defaultValue: 'name',
    },
    sortOrder: {
      control: { type: 'select', options: ['asc', 'desc'] },
      defaultValue: 'asc',
    },
    onPageSizeChange: { action: 'pageSizeChanged' },
    onSortFieldChange: { action: 'sortFieldChanged' },
    onSortOrderChange: { action: 'sortOrderChanged' },
  },
};

const Template = (args) => <TagFilterControls {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortOrderOptions: [
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ],
};
