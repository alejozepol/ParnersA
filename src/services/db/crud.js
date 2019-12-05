import firebase from '../firebaseConfig';

function getAll(collection) {
  firebase.firestore()
    .collection(collection)
    .get()
    .then((data) => {
      const query = [];
      data.forEach((doc) => query.push(doc.data()))
      return query;
    })
    .catch((error) => (
      { state: false, menssage: error }
    ));
}

function get(collection, id) {
  firebase.firestore()
    .collection(collection)
    .get()
    .then((data) => data)
    .catch((error) => (
      { state: false, menssage: error }
    ));
}

function create(collection, data, key) {
  firebase.firestore()
    .collection(collection)
    .doc(key)
    .set(data)
    .then((res) => (
      { state: true, menssage: res }
    ))
    .catch((error) => (
      { state: false, menssage: error }
    ));
}

export {
  create,
  getAll,
  get,
};
