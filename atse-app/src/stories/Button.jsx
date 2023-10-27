import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

// import TestSvg from './assets/images/logo.svg';
// import {ReactComponent as ImageFile} from './assets/images/logo.svg';
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  // console.log('TestSvg', TestSvg);
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      <img src={`./assets/images/logo.svg`} alt="test" />
      {/* <img src={TestSvg} alt="test" /> */}
      {/* <ImageFile /> */}
      {/* <TestSvg /> */}
      <div className="test-123"></div>
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
