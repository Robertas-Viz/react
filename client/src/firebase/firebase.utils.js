import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyB0FYxbE3ycgBrc8LPPxzC7GdsIJgDocHs",
  authDomain: "react-hcc.firebaseapp.com",
  databaseURL: "https://react-hcc.firebaseio.com",
  projectId: "react-hcc",
  storageBucket: "react-hcc.appspot.com",
  messagingSenderId: "941725595303",
  appId: "1:941725595303:web:7f60ac3b4716f8273c0d82",
  measurementId: "G-1WBEXGN5RH"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
