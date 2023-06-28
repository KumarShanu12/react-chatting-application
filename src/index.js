import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd4dcEQN-OAXMWS8CylJGrQ7PWkQ037-w",
  authDomain: "react-chat-app-bd885.firebaseapp.com",
  databaseURL: "https://react-chat-app-bd885-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-bd885",
  storageBucket: "react-chat-app-bd885.appspot.com",
  messagingSenderId: "672894068398",
  appId: "1:672894068398:web:89d2b7ce44a24dc6ec6f3f",
  measurementId: "G-W8BFMQCGSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
