import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCbjVkJckH7a4ZQLi64zsAQYpM_tihAXP8",
    authDomain: "kidlatmobileapp.firebaseapp.com",
    databaseURL: "https://kidlatmobileapp.firebaseio.com",
    projectId: "kidlatmobileapp",
    storageBucket: "kidlatmobileapp.appspot.com",
    messagingSenderId: "328296715147",
    appId: "1:328296715147:web:49c35bf8ab92078855d58e",
    measurementId: "G-CPGLWW35NE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  const storage = firebase.storage()

  export  {
   storage, firebase as default
 }
