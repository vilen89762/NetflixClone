// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTV1qxDiJTeRnNODJIEFPxSQPNElbVc-0",
  authDomain: "netflix-clone-598e8.firebaseapp.com",
  projectId: "netflix-clone-598e8",
  storageBucket: "netflix-clone-598e8.appspot.com",
  messagingSenderId: "1045654794507",
  appId: "1:1045654794507:web:eeb0da6442a3254929f20e",
  measurementId: "G-GJ2CJC30MQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// Initialize Firebase
const analytics = getAnalytics(app);