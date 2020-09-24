import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbK9HnJV_LQfTD0sC1nzWsICjenk1p4OM',
  authDomain: 'spyder9176.firebaseapp.com',
  databaseURL: 'https://spyder9176.firebaseio.com',
  projectId: 'spyder9176',
  storageBucket: 'spyder9176.appspot.com',
  messagingSenderId: '609331556481',
  appId: '1:609331556481:web:f684e8cdd674603c651d80'
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, addtionalData) => {
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
        ...addtionalData
      });
    } catch (error) {
      console.error('Error creating user:', error.message);
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
