// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Bda8yi6a2wzfuTEk8kVWiAM-8PYHSJY",
  authDomain: "accent-access-7e703.firebaseapp.com",
  projectId: "accent-access-7e703",
  storageBucket: "accent-access-7e703.appspot.com",
  messagingSenderId: "500313433441",
  appId: "1:500313433441:web:c7ea04c59fd24843009120",
  measurementId: "G-GRN84YKLSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider =new GoogleAuthProvider()

