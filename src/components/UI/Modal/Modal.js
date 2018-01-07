import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.css';

const Modal = (props) => {
  return (
    <Aux>
      <div
        style={{
          display: props.show ? 'block' : 'none'
        }}
        className={styles.Modal}
      >
        {props.children}
      </div>
      <Backdrop 
        onClick={props.onBackdropClick}
        show={true}
      />
    </Aux>
  );
};

export default Modal;