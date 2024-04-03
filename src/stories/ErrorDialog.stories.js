import React from 'react';
import ErrorDialog from '../components/common/ErrorDialog';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Common/ErrorDialog',
  component: ErrorDialog,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  argTypes: {
    onClose: { action: 'closed' },
  },
};

const Template = (args) => <ErrorDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: { message: 'This is a simulated error message.' },
};
