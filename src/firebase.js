import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAvQfccK39y32AfnJQhvSuE2rh5vQtnhAE",
    authDomain: "facebook-messenger-clone-e9e03.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-e9e03.firebaseio.com",
    projectId: "facebook-messenger-clone-e9e03",
    storageBucket: "facebook-messenger-clone-e9e03.appspot.com",
    messagingSenderId: "375235103594",
    appId: "1:375235103594:web:18b7676aa31bcc07d07313",
    measurementId: "G-FK60SX71X7"

});

const db = firebaseApp.firestore();

export default db;