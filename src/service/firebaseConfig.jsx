// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAubKHi0syjlDcmKwc9_LGlPDvyo_T-W-U",
  authDomain: "ai-travel-planner-11.firebaseapp.com",
  projectId: "ai-travel-planner-11",
  storageBucket: "ai-travel-planner-11.firebasestorage.app",
  messagingSenderId: "685454803000",
  appId: "1:685454803000:web:425aaeaba727536f7ca6cd",
  measurementId: "G-SCJE0J0XEB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);