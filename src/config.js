// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABsr-IP4sP7lqiG9ccxkm-3iRDgkn9ylQ",
  authDomain: "project-ray-cb29e.firebaseapp.com",
  projectId: "project-ray-cb29e",
  storageBucket: "project-ray-cb29e.appspot.com",
  messagingSenderId: "571513720432",
  appId: "1:571513720432:web:9b9e7f3f6f1915521baeb5",
  measurementId: "G-8MQZFY519G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);