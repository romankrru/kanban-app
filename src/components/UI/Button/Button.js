/* eslint-disable */
import React from 'react';

import styles from './Button.css';

const Button = ({ btnType, className, ...props }) => {
  const wrapperAttachedClasses = [styles.ButtonWrapper, className];
  const buttonAttachedClasses = [styles.Button];

  if (btnType == 'warning') {
    buttonAttachedClasses.push(styles.ButtonWarning);
    wrapperAttachedClasses.push(styles.ButtonWrapperWarning);
  }

  return (
    <div className={wrapperAttachedClasses.join(' ')} {...props}>
      <button className={buttonAttachedClasses.join(' ')}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
