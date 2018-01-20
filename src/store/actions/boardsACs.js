/* eslint-disable */
import axios from 'axios';

import firebase from '../../firebase';
import * as actionTypes from './actionTypes';

const updateBoards = (boards) => ({
  type: actionTypes.UPDATE_BOARDS,
  boards,
});

export const initBoards = () => (dispatch) => {
  firebase.database()
    .ref('boards')
    .on('value', (snapshot) => {
      const boards = snapshot.val() || {};

      dispatch(updateBoards(boards));
    });
};