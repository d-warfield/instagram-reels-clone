import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9xaQ0Y8bMHkMV9glUtz37nSZFbPGKS3s",
    authDomain: "ig-reels-clone-be583.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-be583.firebaseio.com",
    projectId: "ig-reels-clone-be583",
    storageBucket: "ig-reels-clone-be583.appspot.com",
    messagingSenderId: "233354954661",
    appId: "1:233354954661:web:2c7e1fe389a9c680faca4c",
    measurementId: "G-R4FQY3F74N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;