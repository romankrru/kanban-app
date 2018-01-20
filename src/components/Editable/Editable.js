/* eslint-disable */
import React, { Component } from 'react';

import styles from './Editable.css';

class Editable extends Component {
  state = {
    isEditing: false,
    value: this.props.value,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  onClick = () => {
    this.setState({
      isEditing: true,
    });
  }

  onBlur = () => {
    this.setState({
      isEditing: false,
    });

    this.stopEditing();
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  checkEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        isEditing: false,
      });

      this.stopEditing();
    }
  }

  stopEditing = () => {
    this.props.onValueChange(this.state.value);
  }

  render() {
    let el = (
      <span
        className={styles.EditableSpan}
        onClick={this.onClick}
      >
        {this.state.value}
      </span>
    );

    if (this.state.isEditing) {
      el = (
        <input
          autoFocus
          onKeyPress={this.checkEnterPress}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={this.state.value}
          className={styles.EditableInput}
        />
      );
    }

    return el;
  }
}

export default Editable;