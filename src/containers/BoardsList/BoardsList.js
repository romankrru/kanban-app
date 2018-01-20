/* eslint-disable */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import BoardPreview from '../../components/BoardPreview/BoardPreview';
import AddNewBoardButton from '../../components/BoardPreview/AddNewBoardButton/AddNewBoardButton';
import AddNewBoard from './AddNewBoard/AddNewBoard';
import styles from './BoardsList.css';

class BoardsList extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  // onBoardDelete = (id) => {
  //   const newBoards = this.props.boards.filter(board => board.id !== id);

  //   this.setState({
  //     boards: newBoards,
  //   });
  // };

  render() {
    const boardsElements = Object.keys(this.props.boards).map(key => {
      return (
        <BoardPreview
          title={this.props.boards[key].name}
          key={key}
          id={key}
          onBoardRemove={this.props.onBoardRemove}
        />
      );
    });

    return (
      <div className={styles.BoardList}>
        <Spinner show={this.props.isLoading} />
        {boardsElements}
        <AddNewBoardButton />
        <Route path={`/add-new-board`} render={props => <AddNewBoard {...props} onBoardAdd={this.props.onBoardAdd} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards.items,
  isLoading: state.boards.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(actions.fetchBoards()),
  onBoardAdd: (name, userId) => dispatch(actions.addBoard(name, userId)),
  onBoardRemove: (boardId) => dispatch(actions.removeBoard(boardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsList);