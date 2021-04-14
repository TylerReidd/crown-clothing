import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAQ8TMtohoO-Vtlscf5-AIDJqzW_wXq02k",
  authDomain: "crowndb-25b5a.firebaseapp.com",
  projectId: "crowndb-25b5a",
  storageBucket: "crowndb-25b5a.appspot.com",
  messagingSenderId: "776587558208",
  appId: "1:776587558208:web:f353752c943cf57c2f0ea5",
  measurementId: "G-2SKTWH73KC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapShot = await userRef.get();

 if(!snapShot.exists) {
   const {displayName, email} = userAuth;
   const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch(error) {
    console.log('error creating user', error.message)
  }
 }
 return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;