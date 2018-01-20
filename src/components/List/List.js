/* eslint-disable */
import React from 'react';

import Card from './Card/Card';
import styles from './List.css';
import Editable from '../Editable/Editable';

const List = (props) => {
  const cards = Object.keys(props.cards).map(key => {
    return (
      <Card
        id={key}
        key={key}
        name={props.cards[key].name}
        listId={props.cards[key].listId}
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
      <div
        className={styles.Delete} 
        onClick={() => props.onListRemove(props.id)}
      />
      <ul className={styles.List}>
        {cards}
      </ul>
      <div
        className={styles.AddCard}
        onClick={() => props.onCardAdd(props.id, props.boardId, props.userId)}
      >
        Add new Card
      </div>
    </div>
  );
};

export default List;