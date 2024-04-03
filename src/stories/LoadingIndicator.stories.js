import React from 'react';
import LoadingIndicator from '../components/common/LoadingIndicator';

export default {
  title: 'Common/LoadingIndicator',
  component: LoadingIndicator,
};

const Template = (args) => <LoadingIndicator {...args} />;

export const Default = Template.bind({});
