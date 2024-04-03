import React from 'react';
import TagPageSize from '../components/TagPageSize';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/TagPageSize',
  component: TagPageSize,
  argTypes: {
    pageSize: {
      control: { type: 'number' },
      defaultValue: 10,
    },
  },
};

const Template = (args) => (
  <TagPageSize {...args} onPageSizeChange={action('pageSizeChanged')} />
);

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
};

export const PageSize20 = Template.bind({});
PageSize20.args = {
  pageSize: 20,
};
