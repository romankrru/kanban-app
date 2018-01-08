import React from 'react';

import styles from './AddNewList.css';

const AddNewList = (props) => {
  return (
    <div className={styles.AddNewListWrapper}>
      <div 
        className={styles.AddNewList}
        onClick={props.onListAdd}
      >
        Add new List
      </div>
    </div>
  );
};

export default AddNewList;