
import firebase from "firebase"

const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyB7FhVm0iRXl8ONEfJHeiwbbZiZPz7GN7c",
    authDomain: "todo-cbbb7.firebaseapp.com",
    databaseURL: "https://todo-cbbb7.firebaseio.com",
    projectId: "todo-cbbb7",
    storageBucket: "todo-cbbb7.appspot.com",
    messagingSenderId: "21409956471",
    appId: "1:21409956471:web:eb6d0f4d66223cf0993c72"
  });
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

const database =firebaseApp.firestore();

export default database;