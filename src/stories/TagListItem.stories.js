import React from 'react';
import TagListItem from '../components/TagListItem';
import { Table, TableBody } from '@mui/material';

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
  tag: { name: 'React', count: 123 },
};

export const MultipleTags = (args) => (
  <>
    {args.tags.map((tag, index) => (
      <Template key={index} tag={tag} />
    ))}
  </>
);

MultipleTags.args = {
  tags: [
    { name: 'React', count: 123 },
    { name: 'Storybook', count: 456 },
    { name: 'JavaScript', count: 789 },
  ],
};
