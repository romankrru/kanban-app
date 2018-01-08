import React from 'react';

import Card from './Card/Card';
import styles from './List.css';

const List = (props) => {
  const cards = props.cards.map(card => {
    return (
      <Card
        id={card.id}
        key={card.id}
        name={card.name}
        date={card.date}
      />
    );
  });
  
  return (
    <div className={styles.ListWrapper}>
      <h3 className={styles.ListTitle}>{props.name}</h3>
      <div className={styles.Delete} />
      <ul className={styles.List}>
        {cards}
      </ul>
      <div className={styles.AddCard}>
        Add new Card
      </div>
    </div>
  );
};

export default List;