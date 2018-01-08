import React, { Component } from 'react';

import List from '../../components/List/List';
import styles from './Board.css';

class Board extends Component {
  state = {
    lists: [
      {
        name: 'Todo',
        id: 1,
        cards: [
          {
            id: 1,
            name: 'learn react',
            date: new Date()
          },
          {
            id: 2,
            name: 'learn redux',
            date: new Date()
          },
          {
            id: 3,
            name: 'card 3',
            date: new Date()
          },
          {
            id: 4,
            name: 'card 4',
            date: new Date()
          }
        ]
      },
      {
        name: 'In proogress',
        id: 2,
        cards: [
          {
            id: 1,
            name: 'card 1',
            date: new Date()
          },
          {
            id: 2,
            name: 'card 2',
            date: new Date()
          },
        ]
      },
      {
        name: 'Done',
        id: 3,
        cards: [
          {
            id: 1,
            name: 'card 1',
            date: new Date()
          },
        ]
      }
    ]
  }

  render() {
    const lists = this.state.lists.map(list => {
      return (
        <List
          key={list.id}
          name={list.name}
          cards={list.cards}
        />
      );
    });

    return (
      <div className={styles.Board}>
        {lists}
      </div>
    );
  };
}

export default Board;