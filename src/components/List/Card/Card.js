import React from 'react';

import styles from './Card.css';

const Card = (props) => {
  return (
    <li className={styles.Card}>
      {props.name}
      <div
        className={styles.Delete}
        onClick={() => props.onCardDelete(props.listId, props.id)}
      />
    </li>
  );
};

export default Card;