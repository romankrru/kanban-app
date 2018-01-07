import React, { Component } from 'react';

import BoardPreview from '../../components/BoardPreview/BoardPreview';

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
      }
    ]
  }

  render() {
    const boardsElements = this.state.boards.map((board) => {
      return <BoardPreview title={board.name} />
    });

    return boardsElements;
  }
}

export default BoardsList;