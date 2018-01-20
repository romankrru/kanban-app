/* eslint-disable */
import axios from 'axios';

import firebase from '../../firebase';
import * as actionTypes from './actionTypes';

/*
 * FETCH LISTS
*/

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

// const fetchListsStart = () => ({
//   type: actionTypes.FETCH_LISTS_START,
// });

// const fetchListsSuccess = lists => ({
//   type: actionTypes.FETCH_CARDS_SUCCES,
//   lists,
// });

// const fetchListFail = () => ({
//   type: actionTypes.FETCH_LISTS_FAIL,
// });

// export const fetchLists = (boardId) => (dispatch) => {
//   dispatch(fetchListsStart());

//   const baseUrl = 'https://kanban-580f4.firebaseio.com/lists.json';
//   const params = `?orderBy="boardId"&equalTo="${boardId}"`;
//   const url = `${baseUrl}${params}`

//   axios.get(url)
//     .then((res) => {
//       console.log(res);
//       // dispatch(fetchBoardsSuccess(res.data));
//     })
//     .catch((err) => {
//       dispatch(fetchListFail(err));
//       /* eslint-disable no-console */
//       console.log(err);
//       /* eslint-enable no-console */
//     });
// };
