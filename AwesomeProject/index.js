/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from 'firebase'

AppRegistry.registerComponent(appName, () => App);
var firebaseConfig = {
    apiKey: "AIzaSyAp_l535w9f9mwFNIINCHUvoeK9uEAr6PU",
    authDomain: "awesome2-iqra.firebaseapp.com",
    databaseURL: "https://awesome2-iqra.firebaseio.com",
    projectId: "awesome2-iqra",
    storageBucket: "awesome2-iqra.appspot.com",
    messagingSenderId: "228096187243",
    appId: "1:228096187243:web:b84333a86a530082f78a2e",
    measurementId: "G-RX4CG6JRY2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();