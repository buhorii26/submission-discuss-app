import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import RegisterInput from './styled/RegisterInput';
import RegisterButton from './styled/RegisterButton';

function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <RegisterInput
        type="text"
        name="fullname"
        label="Full Name"
        id="fullname"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        required
      />
      <RegisterInput
        type="text"
        name="email"
        label="Email Address"
        id="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        required
      />
      <RegisterInput
        type="password"
        name="password"
        label="Password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        required
      />
      <RegisterButton
        type="button"
        onClick={() => register({ name, email, password })}
      >
        Register
      </RegisterButton>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
