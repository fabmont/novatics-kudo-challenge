import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

// FIREBASE CREDENTIALS COMMITED ONLY FOR EVALUATION PURPOUSES!
// PLEASE, NEVER COMMIT THESE KIND OF INFORMATION !!!

const firebaseConfig = {
  apiKey: 'AIzaSyDHVoWHHd7knKXQhhiMZMvdCVni3ApoR6o',
  authDomain: 'novatics-kudo.firebaseapp.com',
  databaseURL: 'https://novatics-kudo.firebaseio.com',
  projectId: 'novatics-kudo',
  storageBucket: 'novatics-kudo.appspot.com',
  messagingSenderId: '1051737924482',
  appId: '1:1051737924482:web:040040f2348f246b15e59b',
  measurementId: 'G-CDQX2WGX7D',
};

const appInitializer = firebase.initializeApp(firebaseConfig);
export const githubSignInProvider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default appInitializer;
