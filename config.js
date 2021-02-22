import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAPLJQK4r9a4553sHEieSBkCXNUTrNmAhg",
      authDomain: "willy-app-6a2ca.firebaseapp.com",
      projectId: "willy-app-6a2ca",
      storageBucket: "willy-app-6a2ca.appspot.com",
      messagingSenderId: "66412528579",
      appId: "1:66412528579:web:67b7d8ce06ee3523ca3376"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    export default firebase.firestore()