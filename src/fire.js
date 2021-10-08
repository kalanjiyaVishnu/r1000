// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Q6GjNOG7ZQRdF1BfVD6lZWfUMqW3cxI",
  authDomain: "edith-1c078.firebaseapp.com",
  projectId: "edith-1c078",
  storageBucket: "edith-1c078.appspot.com",
  messagingSenderId: "90534303198",
  appId: "1:90534303198:web:38f47e8b80e537d716b94f",
  measurementId: "G-KSBQWH6NZ8"
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(Fire);
export default Fire;