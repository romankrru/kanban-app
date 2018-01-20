/* eslint-disable */
import axios from 'axios';

import firebase from '../../firebase';
import * as actionTypes from './actionTypes';

const updateLists = (lists) => ({
  type: actionTypes.UPDATE_LISTS,
  lists,
});

export const initLists = (boardId) => (dispatch) => {
  firebase.database()
    .ref('lists')
    .orderByChild('boardId')
    .equalTo(boardId)
    .on('value', (snapshot) => {
      const lists = snapshot.val() || {};
      dispatch(updateLists(lists));
    });
};

const updateCards = cards => ({
  type: actionTypes.UPDATE_CARDS,
  cards,
});

export const initCards = (boardId) => (dispatch) => {
  firebase.database()
    .ref('cards')
    .orderByChild('boardId')
    .equalTo(boardId)
    .on('value', (snapshot) => {
      const cards = snapshot.val() || {};
      dispatch(updateCards(cards));
    });
}
