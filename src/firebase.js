// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc5zoDQnYgoT3EarxEIGk9wzZ3ME6ldzI",
  authDomain: "cloudcash-3d055.firebaseapp.com",
  projectId: "cloudcash-3d055",
  storageBucket: "cloudcash-3d055.appspot.com",
  messagingSenderId: "831150053105",
  appId: "1:831150053105:web:0833e4cecf8a37ccdcbb50",
  measurementId: "G-0R4JMM9KEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);