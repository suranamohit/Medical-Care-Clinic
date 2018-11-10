import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from "firebase";
import App from './App';
import * as serviceWorker from './serviceWorker';

var config = {
    apiKey: "AIzaSyBS6bOINh8seoHw3Pmde2VOZvQHr6SPcbQ",
    authDomain: "sganimatedlogin.firebaseapp.com",
    databaseURL: "https://sganimatedlogin.firebaseio.com",
    projectId: "sganimatedlogin",
    storageBucket: "sganimatedlogin.appspot.com",
    messagingSenderId: "38208081261"
  };
  firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
