import React from 'react';
import NotFound from '../components/common/NotFound';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Common/NotFound',
  component: NotFound,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

const Template = (args) => <NotFound {...args} />;

export const Default = Template.bind({});
