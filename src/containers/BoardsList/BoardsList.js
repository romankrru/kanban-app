import React, { Component } from 'react';

import BoardPreview from '../../components/BoardPreview/BoardPreview';
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
      </div>
    );
  }
}

export default BoardsList;