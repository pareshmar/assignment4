import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
    authDomain: "assignment3-eb48d.firebaseapp.com",
    databaseURL: "https://assignment3-eb48d.firebaseio.com",
    projectId: "assignment3-eb48d",
    storageBucket: "assignment3-eb48d.appspot.com",
    messagingSenderId: "353271731456",
    appId: "1:353271731456:web:a1196e8e14c93e8c42cfe5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase; 