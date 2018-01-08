const initialState = [
  {
    id: '1',
    name: 'Board 1',
  },
  {
    id: '2',
    name: 'Board 2',
  },
];

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default boardsReducer;
