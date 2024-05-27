import React from 'react';
import PropTypes from 'prop-types';
import LoginButton from './styled/LoginButton';
import RegisterButton from './styled/RegisterButton';

function AnnounceBar({ login, register }) {
  return (
    <div>
      <LoginButton onClick={login}>Login</LoginButton>
      <RegisterButton onClick={register}>Register</RegisterButton>
    </div>
  );
}

AnnounceBar.propTypes = {
  login: PropTypes.func,
  register: PropTypes.func,
};

AnnounceBar.defaultProps = {
  login: () => {},
  register: () => {},
};

export default AnnounceBar;
