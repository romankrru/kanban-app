import React from 'react';

import styles from './Backdrop.css';

const Backdrop = (props) => {
  return (
    <div
      style={{
        display: props.show ? 'block' : 'none'
      }}
      className={styles.Backdrop}
      onClick={props.onClick}
    />
  );
};

export default Backdrop;