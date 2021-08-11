import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBB4aRmRUAakqm11x79obVvcXFhL6IneUI",
  authDomain: "insta-reels-clone-2aa87.firebaseapp.com",
  projectId: "insta-reels-clone-2aa87",
  storageBucket: "insta-reels-clone-2aa87.appspot.com",
  messagingSenderId: "584118631216",
  appId: "1:584118631216:web:7b036b96352b7e63b426f5",
};

//initializing firebase to a variable firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//making an object of firestore and initialize it to db;
const db = firebaseApp.firestore();

export default db;