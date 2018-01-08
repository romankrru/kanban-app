import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: {},
  loading: false
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        items: action.boards,
      } 
    default:
      return state;
  }
};

export default boardsReducer;
