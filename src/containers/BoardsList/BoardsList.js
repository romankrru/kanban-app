import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import BoardPreview from '../../components/BoardPreview/BoardPreview';
import AddNewBoardButton from '../../components/BoardPreview/AddNewBoardButton/AddNewBoardButton';
import AddNewBoard from './AddNewBoard/AddNewBoard';
import styles from './BoardsList.css';

class BoardsList extends Component {
  // state = {
  //   boards: [
  //     {
  //       id: '1',
  //       name: 'Board 1',
  //     },
  //     {
  //       id: '2',
  //       name: 'Board 2',
  //     },
  //   ]
  // }

  onBoardAdd = (name, id) => {
    const newBoards = [...this.state.boards];
    newBoards.push({
      name,
      id,
    });

    this.setState({
      boards: newBoards,
    });
  }

  onBoardDelete = (id) => {
    const newBoards = this.state.boards.filter(board => board.id !== id);

    this.setState({
      boards: newBoards,
    });
  };

  render() {
    const boardsElements = this.props.boards.map((board) => {
      return (
        <BoardPreview
          title={board.name}
          key={board.id}
          id={board.id}
          onBoardDelete={this.onBoardDelete}
        />
      );
    });


    return (
      <div className={styles.BoardList}>
        {boardsElements}
        <AddNewBoardButton />
        <Route path={`/add-new-board`} render={props => <AddNewBoard {...props} onBoardAdd={this.onBoardAdd} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(BoardsList);