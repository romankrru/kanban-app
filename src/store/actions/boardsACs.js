/* eslint-disable */
import axios from 'axios';
import uuidv4 from 'uuid/v4';

import firebase from '../../firebase';

import * as actionTypes from './actionTypes';

const fetchBoardsStart = () => ({
  type: actionTypes.FETCH_BOARDS_START,
});

const fetchBoardsSuccess = boards => ({
  type: actionTypes.FETCH_BOARDS_SUCCESS,
  boards,
});

const fetchBoardsFail = () => ({
  type: actionTypes.FETCH_BOARDS_FAIL,
});

export const fetchBoards = () => (dispatch) => {
  dispatch(fetchBoardsStart());

  firebase.database()
    .ref('boards')
    .on('value', (snapshot) => {
      // gets around Redux panicking about actions in reducers
      console.log(snapshot.val())
      dispatch(fetchBoardsSuccess(snapshot.val()));
      setTimeout(() => {
        // const messages = snapshot.val() || [];
        // dispatch(receiveMessages(messages))
      }, 0);
    });

  // axios.get('https://kanban-580f4.firebaseio.com/boards.json')
  //   .then((res) => {
  //     dispatch(fetchBoardsSuccess(res.data));
  //   })
  //   .catch((err) => {
  //     dispatch(fetchBoardsFail(err));
  //     /* eslint-disable no-console */
  //     console.log(err);
  //     /* eslint-enable no-console */
  //   });
};

const addBoardStart = () => ({
  type: actionTypes.ADD_BOARD_START,
});

const addBoardFail = () => ({
  type: actionTypes.ADD_BOARD_FAIL,
});

const addBoardSucces = (board) => ({
  type: actionTypes.ADD_BOARD_SUCCES,
  board,
});

// export const addBoard = (name, userId) => ({
//   type: actionTypes.ADD_BOARD,
//   boardId: uuidv4(),
//   name,
//   userId,
// });

export const addBoard = (name, userId) => (dispatch) => {
  const newBoard = {
    boardId: uuidv4(),
    name,
    userId,
  };

  const newBoardRef = firebase
    .database()
    .ref('boards')
    .push();

  console.log(newBoardRef.key)
  newBoardRef.set(newBoard);

  dispatch(addBoardSucces(newBoard));
};

// export const remove