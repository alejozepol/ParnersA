import firebase from 'firebase';
import firebaseConfig from '../config';

console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);
export default firebase;
