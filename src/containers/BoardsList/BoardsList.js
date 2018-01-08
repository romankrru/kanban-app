import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import BoardPreview from '../../components/BoardPreview/BoardPreview';
import AddNewBoardButton from '../../components/BoardPreview/AddNewBoardButton/AddNewBoardButton';
import AddNewBoard from './AddNewBoard/AddNewBoard';
import styles from './BoardsList.css';

class BoardsList extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

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
    if (Object.keys(this.props.boards).length == 0 ) {
      return null;
    }

    const boardsElements = Object.keys(this.props.boards).map(key => {
      return (
        <BoardPreview
          title={this.props.boards[key].name}
          key={key}
          id={key}
          onBoardDelete={this.onBoardDelete}
        />
      );
    });

    // const boardsElements = this.props.boards.map((board) => {
    //   return (
    //     <BoardPreview
    //       title={board.name}
    //       key={board.id}
    //       id={board.id}
    //       onBoardDelete={this.onBoardDelete}
    //     />
    //   );
    // });

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
  boards: state.boards.items,
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(actions.fetchBoards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardsList);