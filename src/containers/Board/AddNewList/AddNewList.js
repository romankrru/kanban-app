import React from 'react';

import styles from './AddNewList.css';

const AddNewList = (props) => {
  return (
    <div className={styles.AddNewListWrapper}>
      <div className={styles.AddNewList}>
        Add new List
      </div>
    </div>
  );
};

export default AddNewList;