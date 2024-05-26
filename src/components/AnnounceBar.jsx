import React from 'react';
import PropTypes from 'prop-types';
import Content from './styled/Content';
import LoginButton from './styled/LoginButton';
import RegisterButton from './styled/RegisterButton';

function AnnounceBar({
  ctaLabel, onClick, type,
}) {
  const backgroundColor = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  };

  const textColor = {
    success: '#fff',
    error: '#fff',
    warning: '#fff',
    info: '#fff',
  };

  return (
    <Content
      backgroundColor={backgroundColor[type]}
      textColor={textColor[type]}
      maxWidth="800px"
      padding="1rem 2rem 2rem 2rem"
    >
      <LoginButton
        backgroundColor={textColor[type]}
        textColor={backgroundColor[type]}
        onClick={onClick}
      >
        {ctaLabel}
      </LoginButton>
      <RegisterButton
        backgroundColor={textColor[type]}
        textColor={backgroundColor[type]}
        onClick={onClick}
      >
        {ctaLabel}
      </RegisterButton>
    </Content>
  );
}

AnnounceBar.propTypes = {
  /** Action when the CTA button is cli cked  */
  onClick: PropTypes.func.isRequired,
  /** Type of announcement, it will change the color of the bar  */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  /** The label of the call to action button  */
  ctaLabel: PropTypes.string.isRequired,
};

export default AnnounceBar;
