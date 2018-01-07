import React from 'react';

import styles from './TextInput.css';

const TextInput = ({onChange, value, className, ...props}) => {
  let attachedClasses = [styles.TextInputWrapper];
  
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

export default TextInput;