import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsnwt9pKGI1FmGu5KBE6GbHHbje2oZNVU",
    authDomain: "survey-2d753.firebaseapp.com",
    databaseURL: "https://survey-2d753-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "survey-2d753",
    storageBucket: "survey-2d753.appspot.com",
    messagingSenderId: "910197639487",
    appId: "1:910197639487:web:566f35be1d08027abfab8a"
  };
  export const firebaseApp = firebase.initializeApp(config);