/* eslint-disable */
import axios from 'axios';

import * as actionTypes from './actionTypes';

const fetchBoardsStart = () => {
  return {
    type: actionTypes.FETCH_BOARDS_START,
  }
};

const fetchBoardsSuccess = (boards) => {
  return {
    type: actionTypes.FETCH_BOARDS_SUCCESS,
    boards: boards,
  }
};

const fetchBoardsFail = () => {
  return {
    type: actionTypes.FETCH_BOARDS_FAIL,
  }
};

export const fetchBoards = () => (dispatch) => {
  dispatch(fetchBoardsStart())

  axios.get('https://kanban-580f4.firebaseio.com/boards.json')
    .then(res => {
      dispatch(fetchBoardsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchBoardsFail(err));
      console.log(err);
    })
}