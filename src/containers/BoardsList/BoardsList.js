import React, { Component } from 'react';

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
    return 'Boards List';
  }
}

export default BoardsList;