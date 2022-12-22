// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTe7kDumqy65u-8RDoDghgvzloPIPNEBE",
  authDomain: "storybook-711b0.firebaseapp.com",
  projectId: "storybook-711b0",
  storageBucket: "storybook-711b0.appspot.com",
  messagingSenderId: "277604745107",
  appId: "1:277604745107:web:507368360521da3bcef266",
  measurementId: "G-6T85BRBX56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
export default db;