import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAI7Poe0t5gN5fN2zgUnGe-folGBCEUClA",
    authDomain: "crwonn-231dd.firebaseapp.com",
    projectId: "crwonn-231dd",
    storageBucket: "crwonn-231dd.appspot.com",
    messagingSenderId: "481074997527",
    appId: "1:481074997527:web:09f6a89528bcb8d42cef52"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
