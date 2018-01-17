import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.css';

const TextInput = ({
  onChange, value, className, ...props
}) => {
  const attachedClasses = [styles.TextInputWrapper];

  if (className) {
    attachedClasses.push(className);
  }

  return (
    <div className={attachedClasses.join(' ')}>
      <input
        className={styles.TextInput}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};

TextInput.defaultProps = {
  onChange: () => {},
  value: '',
  className: '',
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
