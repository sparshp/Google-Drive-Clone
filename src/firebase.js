import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN3PbAURV_DML-U8ZOf5Y__c54gKcDhMM",
    authDomain: "drive-clone-36716.firebaseapp.com",
    projectId: "drive-clone-36716",
    storageBucket: "drive-clone-36716.appspot.com",
    messagingSenderId: "905677631557",
    appId: "1:905677631557:web:f33849a90f94c9d3b2b32c",
    measurementId: "G-C8Z5SZEZZV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth= firebase.auth()
  const provider= new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export {auth,provider,storage,db}