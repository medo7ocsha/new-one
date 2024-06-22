import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAW2eDK2FKOmKceiR_pf5xKUy-3A7FmS-8",
  authDomain: "detla-5316f.firebaseapp.com",
  projectId: "detla-5316f",
  storageBucket: "detla-5316f.appspot.com",
  messagingSenderId: "754653511557",
  appId: "1:754653511557:web:9197d1d563130cb6f14eec"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
