import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, backgroundColor, onClick, padding}) {
  return (
    <button onClick={onClick}
    style={backgroundColor && { backgroundColor }, padding && {padding}}>
      {label}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  padding: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};