import React from 'react';
import ReactDOM from 'react-dom/client';

import 'whatwg-fetch';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App.js';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHp4jDlL1--Ne-JHrljaPvGaILv3CcmxA",
  authDomain: "original-husky-scheduler.firebaseapp.com",
  databaseURL: "https://original-husky-scheduler-default-rtdb.firebaseio.com",
  projectId: "original-husky-scheduler",
  storageBucket: "original-husky-scheduler.appspot.com",
  messagingSenderId: "166063942758",
  appId: "1:166063942758:web:aa595d79a16b3efaae11a7",
  measurementId: "G-YEET85ZDZC"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);