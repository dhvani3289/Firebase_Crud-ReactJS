// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrV1afadxGB3HscApWkehp4-cFamTbgBs",
  authDomain: "fir-crud-2f2f0.firebaseapp.com",
  projectId: "fir-crud-2f2f0",
  storageBucket: "fir-crud-2f2f0.appspot.com",
  messagingSenderId: "673533514806",
  appId: "1:673533514806:web:f8b0dce4877bf6d293f497",
  measurementId: "G-DD2FSG0BL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;
export { auth, provider };



