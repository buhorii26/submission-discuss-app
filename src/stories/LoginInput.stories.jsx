import React from 'react';
import LoginInput from '../components/styled/LoginInput';

export default {
  title: 'Components/LoginInput',
  component: LoginInput,
};

function Template(args) {
  return <LoginInput {...args} />;
}

export const EmailInput = Template.bind({});
EmailInput.args = {
  placeholder: 'Email',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  placeholder: 'Email',
};
