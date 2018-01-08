import React from 'react';

import Card from './Card/Card';
import styles from './List.css';
import Editable from '../Editable/Editable';

const List = (props) => {
  const cards = props.cards.map(card => {
    return (
      <Card
        id={card.id}
        key={card.id}
        name={card.name}
        date={card.date}
        listId={props.id}
        onCardDelete={props.onCardDelete}
        onCardEdit={props.onCardEdit}
      />
    );
  });
  
  return (
    <div className={styles.ListWrapper}>
      <h3 className={styles.ListTitle}>
        <Editable 
          value={props.name}
          onValueChange={(newValue) => props.onListTitleEdit(props.id, newValue)}
        />
      </h3>
      <div className={styles.Delete} />
      <ul className={styles.List}>
        {cards}
      </ul>
      <div
        className={styles.AddCard}
        onClick={() => props.onCardAdd(props.id)}
      >
        Add new Card
      </div>
    </div>
  );
};

export default List;