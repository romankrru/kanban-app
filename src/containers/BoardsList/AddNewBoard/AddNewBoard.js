import React, { Component } from 'react';

import Modal from '../../../components/UI/Modal/Modal';
import TextInput from '../../../components/UI/TextInput/TextInput';
import styles from './AddNewBoard.css';

class AddNewBoard extends Component {
  state = {
    newBoardName: '',
  }

  onClose = () => {
    this.props.history.push('/');
  }

  onInputeChange = (e) => {
    this.setState({
      newBoardName: e.target.value,
    });
  }

  render() {
    return (
      <Modal show={true} onBackdropClick={this.onClose}>
        <div className={styles.AddNewBoard}>
          <h2 className={styles.Title}>Input name of new board:</h2>
          <TextInput
            value={this.state.newBoardName}
            onChange={this.onInputeChange}
            placeholder='Name'
          />
        </div>
      </Modal>
    );
  }
}

export default AddNewBoard;