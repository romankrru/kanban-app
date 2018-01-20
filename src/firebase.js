import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDVNBq57OfdCdUQBTSgxYVD017a7XWyBg8',
  authDomain: 'kanban-580f4.firebaseapp.com',
  databaseURL: 'https://kanban-580f4.firebaseio.com',
  projectId: 'kanban-580f4',
  storageBucket: 'kanban-580f4.appspot.com',
  messagingSenderId: '102655898337',
};

firebase.initializeApp(config);
export default firebase;
