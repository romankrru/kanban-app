import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './BoardPreview.css';

const BoardPreview = (props) => {
  return (
    <Link to={`/board/${props.id}`} className={styles.BoardPreview}>
      {props.title}
      <div 
        className={styles.Trash}
        onClick={(e) => {
          e.preventDefault();
          props.onBoardDelete(props.id);
        }}
      />
    </Link>
  );
}

export default withRouter(BoardPreview);