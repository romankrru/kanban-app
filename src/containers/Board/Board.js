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

  onCardAdd = (listId) => {
    const lists = [...this.state.lists];
    const updatedLists = lists.map(l => {
      if (l.id === listId) {
        l.cards.push({
          id: Math.random(),
          name: 'New card',
          date: new Date(),
        });
      }

      return l;
    });

    this.setState({
      lists: updatedLists,
    });
  }

  onCardDelete = (listId, cardId) => {
    const lists = [...this.state.lists];

    const listIndex = this.state.lists.findIndex(l => {
      return l.id === listId;
    });

    const list = { ...lists[listIndex] };

    const cardIndex = list.cards.findIndex(c => {
      return c.id === cardId;
    });

    list.cards.splice(cardIndex, 1);

    const updatedLists = [
      ...this.state.lists.slice(0, listIndex),
      list,
      ...this.state.lists.slice(listIndex + 1),
    ];

    this.setState({
      lists: updatedLists,
    });
  };

  render() {
    const lists = this.state.lists.map(list => {
      return (
        <List
          id={list.id}
          key={list.id}
          name={list.name}
          cards={list.cards}
          onCardAdd={this.onCardAdd}
          onCardDelete={this.onCardDelete}
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