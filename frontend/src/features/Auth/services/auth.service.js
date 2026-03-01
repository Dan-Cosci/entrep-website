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

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};