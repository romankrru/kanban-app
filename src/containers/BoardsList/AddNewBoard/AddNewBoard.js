import React, { Component } from 'react';

import Modal from '../../../components/UI/Modal/Modal';
import TextInput from '../../../components/UI/TextInput/TextInput';
import Button from '../../../components/UI/Button/Button';
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
          <div className={styles.ControlsWrapper}>
            <TextInput
              className={styles['AddNewBoard__input']}
              value={this.state.newBoardName}
              onChange={this.onInputeChange}
              placeholder='Name'
            />
            <Button
              className={styles["AddNewBoard__button"]}
            >
              Confirm
            </Button>
            <Button
              className={styles["AddNewBoard__button"]}
              btnType="warning"
              onClick={this.onClose}
            >
              Dismiss
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddNewBoard;