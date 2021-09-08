import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bgcolor }) => {
  return <div style={{
    background: bgcolor,
    height: '1000px',
    width: '1000px',
    margin: '50px'
  }}>{ }</div>;
};

Display.propTypes = {
  bgcolor: PropTypes.string.isRequired,
};

export default Display;
