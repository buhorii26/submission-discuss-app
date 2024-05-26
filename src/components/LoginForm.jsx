import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LoginInput from './styled/LoginInput';
import LoginButton from './styled/LoginButton';

function LoginForm({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <LoginInput type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      <LoginInput type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <LoginButton type="button" onClick={() => login({ email, password })}>Login</LoginButton>
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
