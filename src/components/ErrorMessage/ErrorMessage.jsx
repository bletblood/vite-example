import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <div className="ErrorMessage" data-testid="ErrorMessage">
      ErrorMessage Component
    </div>
  )
}

ErrorMessage.propTypes = {};

ErrorMessage.defaultProps = {};

export default ErrorMessage;
