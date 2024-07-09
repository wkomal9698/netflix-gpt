// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxZJGhkCiUtmY4M48zqEnefjIKHenCfeo",
  authDomain: "netflixgpt-komal.firebaseapp.com",
  projectId: "netflixgpt-komal",
  storageBucket: "netflixgpt-komal.appspot.com",
  messagingSenderId: "634564840327",
  appId: "1:634564840327:web:d7b2e95151fe1699fea122",
  measurementId: "G-TN6SPE3RB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();