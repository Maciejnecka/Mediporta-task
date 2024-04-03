import React from 'react';
import TagTable from '../components/TagTable';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/TagTable',
  component: TagTable,
  argTypes: {
    sortField: {
      control: { type: 'select', options: ['name', 'popular'] },
      defaultValue: 'name',
    },
    sortOrder: {
      control: { type: 'select', options: ['asc', 'desc'] },
      defaultValue: 'asc',
    },
  },
};

const mockTagsData = {
  items: [
    { name: 'React', count: 100 },
    { name: 'Vue', count: 80 },
    { name: 'Angular', count: 90 },
  ],
};

const Template = (args) => <TagTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagsData: mockTagsData,
  onSortFieldChange: action('sortFieldChanged'),
};
