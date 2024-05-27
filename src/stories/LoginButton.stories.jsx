import React from 'react';
import LoginButton from '../components/styled/LoginButton';

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
};

function Template(args) {
  return <LoginButton {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Login',
};
