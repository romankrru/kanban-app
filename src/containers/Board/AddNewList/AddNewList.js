import React from 'react';
import PropTypes from 'prop-types';

import styles from './AddNewList.css';

const AddNewList = props => (
  <div className={styles.AddNewListWrapper}>
    <div
      className={styles.AddNewList}
      onClick={props.onListAdd}
      role="button"
      onKeyPress={props.onListAdd}
      tabIndex="0"
    >
        Add new List
    </div>
  </div>
);

AddNewList.propTypes = {
  onListAdd: PropTypes.func.isRequired,
};

export default AddNewList;
