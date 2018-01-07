import React from 'react';

import styles from './Modal.css';

const Modal = (props) => {
  return (
    <div
      style={{
        display: props.show ? 'block' : 'none'
      }}
      className={styles.Modal}
    >
      {props.children}
    </div>
  );
};

export default Modal;