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
      return {
        ...state,
        items: action.boards,
        loading: false,
      };

    case actionTypes.ADD_BOARD_SUCCES: 
      return {
        ...state,
        items: {
          ...state.items,
          ...action.board,
        }
      }
    
    case actionTypes.REMOVE_BOARD_SUCCES:
      const newItems = Object.keys(state.items).filter(key => {
        return key !== action.boardId;
      });
      
      return {
        ...state,
        items: {
          ...newItems,
        }
      };

    default:
      return state;
  }
};

export default boardsReducer;
