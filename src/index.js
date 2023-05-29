import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-ZUpsljB0Ps3eTzvc22HNyYN8Jw2R8Uk",
  authDomain: "react-chat-app-17db4.firebaseapp.com",
  databaseURL: "https://react-chat-app-17db4-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-17db4",
  storageBucket: "react-chat-app-17db4.appspot.com",
  messagingSenderId: "161908537595",
  appId: "1:161908537595:web:04aa77c37d33cce009185e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
