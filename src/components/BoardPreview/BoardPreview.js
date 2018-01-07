import React from 'react';

import styles from './BoardPreview.css';

const BoardPreview = (props) => {
  return (
    <div className={styles.BoardPreview}>
      {props.title}
    </div>
  );
}

export default BoardPreview;