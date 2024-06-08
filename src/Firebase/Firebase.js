// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEHEm1faT1zyVhQ03lI8t1yBEm_teh8g",
  authDomain: "safeguardian-c47f7.firebaseapp.com",
  projectId: "safeguardian-c47f7",
  storageBucket: "safeguardian-c47f7.appspot.com",
  messagingSenderId: "381315050102",
  appId: "1:381315050102:web:a58f70686ea2c3bcfe0d57",
  measurementId: "G-TZHF772FD4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; 