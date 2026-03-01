import { 
  GoogleAuthProvider,
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from 'firebase/auth'

import { auth } from '../../../config/firebase.js'

const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res);
    console.log(auth)
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const regularSignIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}