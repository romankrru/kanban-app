/* eslint-disable */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import firebase from '../../firebase';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import BoardPreview from '../../components/BoardPreview/BoardPreview';
import AddNewBoardButton from '../../components/BoardPreview/AddNewBoardButton/AddNewBoardButton';
import AddNewBoard from './AddNewBoard/AddNewBoard';
import styles from './BoardsList.css';

class BoardsList extends Component {
  componentDidMount() {
    this.props.initBoards();
  }

  onBoardAdd = (name, userId) => {
    const newBoardData = {
      name,
      userId,
    };

    const newBoardRef = firebase
      .database()
      .ref('boards')
      .push();

    newBoardRef.set(newBoardData);
  }

  onBoardRemove = boardId => {
    const boardRef = firebase
      .database()
      .ref(`/boards/${boardId}`)
      .remove();
  }

  render() {
    const boardsElements = Object.keys(this.props.boards).map(key => {
      return (
        <BoardPreview
          title={this.props.boards[key].name}
          key={key}
          id={key}
          onBoardRemove={this.onBoardRemove}
        />
      );
    });

    return (
      <div className={styles.BoardList}>
        <Spinner show={this.props.isLoading} />
        {boardsElements}
        <AddNewBoardButton />
        <Route path={`/add-new-board`} render={props => <AddNewBoard {...props} onBoardAdd={this.onBoardAdd} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards.items,
  isLoading: state.boards.loading,
});

const mapDispatchToProps = dispatch => ({
  initBoards: () => dispatch(actions.initBoards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsList);