import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDc9eftFgwa5ZbnCCTfLLhKPTUC1WTKOpA",
    authDomain: "event-management-db4ac.firebaseapp.com",
    databaseURL: "https://event-management-db4ac.firebaseio.com",
    projectId: "event-management-db4ac",
    storageBucket: "event-management-db4ac.appspot.com",
    messagingSenderId: "788538970963",
    appId: "1:788538970963:web:0e6cdfce959361e49fc7a6"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;