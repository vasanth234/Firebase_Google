// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZwhXNrLyUqjfIjOdw0c8R6Ih4cbU5d5g",
  authDomain: "login1-784de.firebaseapp.com",
  projectId: "login1-784de",
  storageBucket: "login1-784de.appspot.com",
  messagingSenderId: "12799443111",
  appId: "1:12799443111:web:dbc5e87a4a93ab870c5b82",
  measurementId: "G-HFQXQ0JH7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

export {auth,db};
export default app;