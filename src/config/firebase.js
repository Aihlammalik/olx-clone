import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDE_9VrTY7zVAQ7WAtyaWasENjZOeU-dCQ",
    authDomain: "olx-clone-c8ec8.firebaseapp.com",
    projectId: "olx-clone-c8ec8",
    storageBucket: "olx-clone-c8ec8.appspot.com",
    messagingSenderId: "409709993944",
    appId: "1:409709993944:web:1f4bf8fd8fec4773fd5cad",
    measurementId: "G-HTLFPQQCFF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();