import React from 'react';
import AnnounceBar from '../components/AnnounceBar';

export default {
  title: 'Components/AnnounceBar',
  component: AnnounceBar,
};

function Template(args) {
  return <AnnounceBar {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  login: () => alert('Login clicked'),
  register: () => alert('Register clicked'),
};
