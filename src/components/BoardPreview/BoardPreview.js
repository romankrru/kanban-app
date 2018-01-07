import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './BoardPreview.css';

const BoardPreview = (props) => {
  return (
    <Link to="/board" className={styles.BoardPreview}>
      {props.title}
    </Link>
  );
}

export default withRouter(BoardPreview);