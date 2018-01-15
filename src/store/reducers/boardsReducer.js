/* eslint-disable */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: {},
  loading: false
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOARDS_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_BOARDS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        items: action.boards,
        loading: false,
      };

    default:
      return state;
  }
};

export default boardsReducer;
