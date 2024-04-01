import React from 'react';
import { Table, TableBody } from '@mui/material';
import TagListItem from '../components/TagListItem';

export default {
  title: 'Components/TagListItem',
  component: TagListItem,
  decorators: [
    (Story) => (
      <Table>
        <TableBody>
          <Story />
        </TableBody>
      </Table>
    ),
  ],
};

const Template = (args) => <TagListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: { name: 'Example Tag', count: 10 },
};

export const HighCount = Template.bind({});
HighCount.args = {
  tag: { name: 'High Count Tag', count: 1000 },
};

export const ZeroCount = Template.bind({});
ZeroCount.args = {
  tag: { name: 'Zero Count', count: 0 },
};
