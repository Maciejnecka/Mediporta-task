import React from 'react';
import Pagination from '../components/TagListPagination';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

export default {
  title: 'Components/TagListPagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/page/1']}>
        <Routes>
          <Route path="/page/:pageNumber" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
  argTypes: {
    totalItems: { control: 'number' },
    pageSize: { control: 'number' },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalItems: 50,
  pageSize: 10,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  totalItems: 1000,
  pageSize: 10,
};

export const FewPages = Template.bind({});
FewPages.args = {
  totalItems: 30,
  pageSize: 10,
};
