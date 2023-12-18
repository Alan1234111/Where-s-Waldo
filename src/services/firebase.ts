import {initializeApp} from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "where-s-waldo-2d851.firebaseapp.com",
  projectId: "where-s-waldo-2d851",
  storageBucket: "where-s-waldo-2d851.appspot.com",
  messagingSenderId: "22139261436",
  appId: "1:22139261436:web:a66a5f967ef9b0be756279",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const gameRef = collection(db, "game");

export const storage = getStorage(app);
