import firebase from './firebaseConfig';

function createUserWithEmailAndPassword(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      res.user.sendEmailVerification('https://app.parners.co');
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/wrong-password':
          console.log('😰¡Clave Errada!😰');
          break;
        case 'auth/user-not-found':
          console.log('😰¡Usuario no encontrado!😰');
          break;
        default:
          console.log(error);
          break;
      }
    });
}

function resetPassword(email) {
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then()
    .catch((error) => {
      console.log(error);
    });
}

function loginFacebook() {
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then()
    .catch((error) => {
      console.log(error);
    });
}

function loginGoogle() {
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then()
    .catch((error) => {
      console.log(error);
    });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then()
    .catch((error) => {
      console.log(error);
    });
}

function islogged() {
}

export {
  createUserWithEmailAndPassword,
  resetPassword,
  loginFacebook,
  loginGoogle,
  logout,
  islogged,
};
