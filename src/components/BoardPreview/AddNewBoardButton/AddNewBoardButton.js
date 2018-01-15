/* eslint-disable */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './AddNewBoardButton.css';

const AddNewBoardButton = (props) => {
  return (
    <Link to="/add-new-board" className={styles.AddNewBoardButton}>
      Add new Board
    </Link>
  );
};

export default withRouter(AddNewBoardButton);