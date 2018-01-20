/* eslint-disable */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: {},
  loading: false,
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_BOARDS:
      return {
        ...state,
        items: action.boards,
      }
  
    default:
      return state;
  }
};

export default boardsReducer;
