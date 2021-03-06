import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../components/UI/Modal/Modal';
import TextInput from '../../../components/UI/TextInput/TextInput';
import Button from '../../../components/UI/Button/Button';
import styles from './AddNewBoard.css';

class AddNewBoard extends Component {
  state = {
    newBoardName: '',
  }

  componentDidMount() {
    window.addEventListener('keypress', this.checkEnterPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.checkEnterPress);
  }

  onClose = () => {
    this.props.history.push('/');
  }

  onBoardAdd = () => {
    if (this.state.newBoardName) {
      this.props.onBoardAdd(this.state.newBoardName, 'user1');
    }
    this.props.history.push('/');
  }

  onInputeChange = (e) => {
    this.setState({
      newBoardName: e.target.value,
    });
  }

  checkEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.onBoardAdd();
    }
  }

  render() {
    return (
      <Modal show onBackdropClick={this.onClose}>
        <div className={styles.AddNewBoard}>
          <h2 className={styles.Title}>Input name of new board:</h2>
          <div className={styles.ControlsWrapper}>
            <TextInput
              autoFocus
              className={styles.AddNewBoard__input}
              value={this.state.newBoardName}
              onChange={this.onInputeChange}
              placeholder="Name"
            />
            <Button
              className={styles.AddNewBoard__button}
              onClick={this.onBoardAdd}
            >
              Confirm
            </Button>
            <Button
              className={styles.AddNewBoard__button}
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

AddNewBoard.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  onBoardAdd: PropTypes.func.isRequired,
};

export default AddNewBoard;
