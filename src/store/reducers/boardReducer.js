/* eslint-disable */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lists: {},
  cards: {},
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LISTS:
      return {
        ...state,
        lists: action.lists,
      };

    case actionTypes.UPDATE_CARDS:
      return {
        ...state,
        cards: action.cards,
      };

    default:
      return state;
  }
};

export default boardReducer;