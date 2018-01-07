import React from 'react';

import styles from './TextInput.css';

const TextInput = ({onChange, value, className, ...props}) => {
  let attachedClasses = [styles.TextInput];
  
  if (className) {
    attachedClasses.push(className);
  }

  return (
    <div className={styles.TextInputWrapper}>
      <input
        className={attachedClasses.join(' ')}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default TextInput;