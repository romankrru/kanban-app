/* eslint-disable */
import React from 'react';

import styles from './Spinner.css';

const Spinner = (props) => {
  const attachedClasses = [styles.Spinner];

  if (!props.show) {
    attachedClasses.push(styles.SpinnerHidden);
  }
  
  return (
    <div className={attachedClasses.join(' ')}> 
      <div className={styles.loader} />
      <div className={styles.SpinnerText}>
        Loading...
      </div>
    </div>
  )
};

export default Spinner;