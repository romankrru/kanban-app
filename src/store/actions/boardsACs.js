import axios from 'axios';
import uuidv4 from 'uuid/v4';

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

  axios.get('https://kanban-580f4.firebaseio.com/boards.json')
    .then((res) => {
      dispatch(fetchBoardsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchBoardsFail(err));
      /* eslint-disable no-console */
      console.log(err);
      /* eslint-enable no-console */
    });
};

export const addBoard = (name, userId) => ({
  type: actionTypes.ADD_BOARD,
  boardId: uuidv4(),
  name,
  userId,
});
