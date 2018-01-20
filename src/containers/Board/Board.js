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
    this.props.onListsInit(
      this.props.match.params.id
    );
  }

  componentWillUnmount() {
    // TODO: usnsubscribe from firebase
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

  onCardEdit = (listId, cardId, newValue) => {
    const lists = [...this.state.lists];

    const listIndex = this.state.lists.findIndex(l => {
      return l.id === listId;
    });

    const list = { ...lists[listIndex] };

    const cardIndex = list.cards.findIndex(c => {
      return c.id === cardId;
    });

    list.cards[cardIndex].name = newValue;

    const updatedLists = [
      ...this.state.lists.slice(0, listIndex),
      list,
      ...this.state.lists.slice(listIndex + 1),
    ];

    this.setState({
      lists: updatedLists,
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

  render() {
    const lists = Object.keys(this.props.lists).map(key => {
      return (
        <List
          id={key}
          key={key}
          name={this.props.lists[key].name}
          cards={[]}
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
  onListsInit: (boardId) => dispatch(actions.initLists(boardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);