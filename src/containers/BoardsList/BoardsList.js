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
    const boardsElements = this.state.boards.map((board, index) => {
      return <BoardPreview title={board.name} key={index} />
    });

    return boardsElements;
  }
}

export default BoardsList;