import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.css';

const Modal = props => (
  <Aux>
    <div
      style={{
          display: props.show ? 'block' : 'none',
        }}
      className={styles.Modal}
    >
      {props.children}
    </div>
    <Backdrop
      onClick={props.onBackdropClick}
      show
    />
  </Aux>
);

Modal.defaultProps = {
  show: false,
  children: null,
  onBackdropClick: () => {},
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  onBackdropClick: PropTypes.func,
};

export default Modal;
