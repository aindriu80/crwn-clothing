import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAFZJwqJXw_LU2ApuXxEXmOCUz5ufxf25s',
  authDomain: 'crwn-db-d3876.firebaseapp.com',
  databaseURL: 'https://crwn-db-d3876.firebaseio.com',
  projectId: 'crwn-db-d3876',
  storageBucket: 'crwn-db-d3876.appspot.com',
  messagingSenderId: '759964947187',
  appId: '1:759964947187:web:bd7855eefd15499c7a1d86',
  measurementId: 'G-9E9N1X9MSL'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
