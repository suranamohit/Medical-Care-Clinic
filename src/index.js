import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from "firebase";
import App from './App';
import * as serviceWorker from './serviceWorker';

var config = {
  apiKey: "AIzaSyA58daX7StsenjPIvFxN0CnwqIjxu3AKek",
  authDomain: "medical-care-clinic.firebaseapp.com",
  databaseURL: "https://medical-care-clinic.firebaseio.com",
  projectId: "medical-care-clinic",
  storageBucket: "medical-care-clinic.appspot.com",
  messagingSenderId: "884539528733"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
