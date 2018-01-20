/* eslint-disable */
import React from 'react';

import Editable from '../../Editable/Editable';
import styles from './Card.css';

const Card = (props) => {
  return (
    <li className={styles.Card}>
      <Editable
        value={props.name}
        onValueChange={(newValue) => props.onCardEdit(props.id, newValue)}  
      />
      <div
        className={styles.Delete}
        onClick={() => props.onCardDelete(props.id)}
      />
    </li>
  );
};

export default Card;