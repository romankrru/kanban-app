import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BoardPreview from '../../components/BoardPreview/BoardPreview';
import AddNewBoardButton from '../../components/BoardPreview/AddNewBoardButton/AddNewBoardButton';
import AddNewBoard from './AddNewBoard/AddNewBoard';
import styles from './BoardsList.css';

class BoardsList extends Component {
  state = {
    boards: [
      {
        id: '1',
        name: 'Board 1',
      },
      {
        id: '2',
        name: 'Board 2',
      },
      {
        id: '3',
        name: 'Board 2',
      },
      {
        id: '4',
        name: 'Board 2',
      }
    ]
  }

  render() {
    const boardsElements = this.state.boards.map((board) => {
      return <BoardPreview title={board.name} key={board.id} />
    });


    return (
      <div className={styles.BoardList}>
        {boardsElements}
        <AddNewBoardButton />
        <Route path={`/add-new-board`} component={AddNewBoard}/>
      </div>
    );
  }
}

export default BoardsList;