import React from 'react';
import { action } from '@storybook/addon-actions';
import { StyledPagination } from '../components/TagListPagination/TagListPagination.styled';
import Pagination from '../components/TagListPagination/TagListPagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Pagination {...args} />;

export const FirstPage = Template.bind({});
FirstPage.args = {
  page: 1,
  onPageChange: action('page changed'),
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  page: 5,
  onPageChange: action('page changed'),
};

export const WithCustomStyling = (args) => (
  <StyledPagination>
    <Pagination {...args} />
  </StyledPagination>
);
WithCustomStyling.args = {
  page: 3,
  onPageChange: action('page changed'),
};
