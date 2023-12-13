import firebase from 'firebase/app';
import 'firebase/auth'; // if you are using authentication
import 'firebase/firestore'; // if you are using Firestore

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "where-s-waldo-2d851.firebaseapp.com",
  projectId: "where-s-waldo-2d851",
  storageBucket: "where-s-waldo-2d851.appspot.com",
  messagingSenderId: "22139261436",
  appId: "1:22139261436:web:a66a5f967ef9b0be756279"
};

firebase.initializeApp(firebaseConfig);

export default firebase;