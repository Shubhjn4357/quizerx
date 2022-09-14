// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//-->for Admin

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCtxveW57XByg7l2zHMFUa95yZmvX9AnRw",
  authDomain: "quizer-54186.firebaseapp.com",
  projectId: "quizer-54186",
  databaseURL:"https://quizer-54186-default-rtdb.firebaseio.com/",
  storageBucket: "quizer-54186.appspot.com",
  messagingSenderId: "473264183357",
  appId: "1:473264183357:web:a1c7109833b61705b27254",
  measurementId: "G-LPFJJ75X83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const database = getDatabase(app);