/* eslint-disable */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: {},
  loading: false,
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
      console.log(state)
      return {
        ...state,
        items: action.boards,
        loading: false,
      };

    case actionTypes.ADD_BOARD_SUCCES: {
      // console.log(action.newBoard)
    }
      // return {
      //   ...state,
      //   items: {
      //     ...state.items,
      //     [action.bordId]: {
      //       name: action.name,
      //       userId: action.userId,
      //     },
      //   },
      // };

    default:
      return state;
  }
};

export default boardsReducer;
