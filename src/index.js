import React from 'react';
import MapScreen from './Components/MapScreen/MapScreen';
import * as firebase from 'firebase';

// Initialize Firebase
// Firebase Console for this project can be found at https://console.firebase.google.com/u/0/project/mobile-passport/overview
const firebaseConfig = {
  apiKey: "AIzaSyD-FepBkoxla7Rn9y6BK6gbmTnNlZ4sis4",
  authDomain: "mobile-passport.firebaseapp.com",
  databaseURL: "https://mobile-passport.firebaseio.com",
  projectId: "mobile-passport",
  storageBucket: "mobile-passport.appspot.com",
  messagingSenderId: "256082278908"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const App = () => {
    return  <MapScreen/>
};

export default App;