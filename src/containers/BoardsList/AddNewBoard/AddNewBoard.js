import React from 'react';

import Modal from '../../../components/UI/Modal/Modal';
import styles from './AddNewBoard.css';

const AddNewBoard = (props) => {
  return (
    <Modal show={true}>
      <div className={styles.AddNewBoard}>
        <h2>Input name of new board:</h2>
      
      </div>
    </Modal>
  );
};

export default AddNewBoard;