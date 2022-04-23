// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhKR4xJwa26OsNnQVP2jJTZSG0DTOJdxY",
  authDomain: "hyparking-92e0b.firebaseapp.com",
  projectId: "hyparking-92e0b",
  storageBucket: "hyparking-92e0b.appspot.com",
  messagingSenderId: "294688790923",
  appId: "1:294688790923:web:711ba48dc04f038de9b78e",
  measurementId: "G-MYX8072KB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);