import firebase from './firebaseConfig';

function createUsuarBD(info) {
  firebase.firestore()
    .collection('usuar')
    .doc(info.EMAIL)
    .set(info)
    .then()
    .catch((error) => error);
}
function createEvento(info) {
  firebase.firestore()
    .collection('usuar')
    .doc(info.EMAIL)
    .set(info)
    .then()
    .catch((error) => error);
}

export {
  createUsuarBD,
  createEvento,

}