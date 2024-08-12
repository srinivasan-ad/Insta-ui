// Import the functions you need from the SDKs you need
import { initializeApp , getApp ,getApps } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getStorage}  from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU8cT71swuH94su6MNhDLLkHgBmHSPKl0",
  authDomain: "insta-clone-3edfe.firebaseapp.com",
  projectId: "insta-clone-3edfe",
  storageBucket: "insta-clone-3edfe.appspot.com",
  messagingSenderId: "994186016475",
  appId: "1:994186016475:web:21d1f58a5be963ef717efe"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app , db , storage};