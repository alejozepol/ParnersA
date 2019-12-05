import { createContext } from 'react';
import firebase from 'firebase';
import FirebaseApp from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!FirebaseApp.apps.length) {
      FirebaseApp.initializeApp(firebaseConfig);
      firebase.analytics();
      FirebaseApp.firestore()
        .enablePersistence({ synchronizeTabs: true })
        .catch((err) => console.log(err));
    }

    // instance variables
    this.db = FirebaseApp.firestore();
    this.eventosCollection = this.db.collection('eventos');
    this.usuariosCollection = this.db.collection('usuar');
  }
}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };