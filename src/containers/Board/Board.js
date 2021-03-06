/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import firebase from '../../firebase';
import * as actions from '../../store/actions';
import List from '../../components/List/List';
import AddNewList from './AddNewList/AddNewList';
import styles from './Board.css';

class Board extends Component {
  componentDidMount() {
    const boardId = this.props.match.params.id

    this.props.onListsInit(boardId);
    this.props.onCardsInit(boardId);
  }

  componentWillUnmount() {
    // TODO: usnsubscribe from firebase
  }

  onCardAdd = (listId, boardId, userId) => {
    const newCard = {
      name: 'New card',
      listId,
      boardId,
      userId,
    };

    const cardsRef = firebase
      .database()
      .ref(`/cards`)
      .push();

    cardsRef.set(newCard);
  }

  onCardDelete = (cardId) => {
    const cardsRef = firebase
      .database()
      .ref(`/cards/${cardId}`)
      .remove();
  };

  onCardEdit = (cardId, newText) => {
    const cardsRef = firebase
      .database()
      .ref(`/cards/${cardId}`)
      .update({
        'name': newText,
      });
  }

  onListTitleEdit = (listId, newTitle) => {
    const listsRef = firebase
      .database()
      .ref(`/lists/${listId}`)
      .update({
        'name': newTitle,
      });
  }

  onListAdd = (boardId, userId) => {
    const newList = {
      name: 'New List',
      boardId,
      userId,
    };

    const listsRef = firebase
      .database()
      .ref(`/lists/`)
      .push();

    listsRef.set(newList);
  }

  onListRemove = (listId) => {
    const listsRef = firebase
      .database()
      .ref(`/lists/${listId}`)
      .remove();
  }

  getVisibleCards = (cards, listId) => {
    const visibleCards = {};

    Object.keys(cards).forEach(key => {
      if (cards[key].listId === listId) {
        visibleCards[key] = cards[key];
      }
    });

    return visibleCards;
  }

  render() {
    const lists = Object.keys(this.props.lists).map(key => {
      return (
        <List
          id={key}
          key={key}
          boardId={this.props.match.params.id}
          userId={'user1'}
          name={this.props.lists[key].name}
          cards={this.getVisibleCards(this.props.cards, key)}
          onCardAdd={this.onCardAdd}
          onCardDelete={this.onCardDelete}
          onCardEdit={this.onCardEdit}
          onListTitleEdit={this.onListTitleEdit}
          onListRemove={this.onListRemove}
        />
      );
    });

    return (
      <div className={styles.Board}>
        {lists}
        <AddNewList
          userId={'user1'}
          boardId={this.props.match.params.id}
          onListAdd={this.onListAdd}
        />
      </div>
    );
  };
}

const mapStateToProps = state => ({
  lists: state.board.lists,
  cards: state.board.cards,
});

const mapDispatchToProps = dispatch => ({
  onListsInit: (boardId) => dispatch(actions.initLists(boardId)),
  onCardsInit: (boardId) => dispatch(actions.initCards(boardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);