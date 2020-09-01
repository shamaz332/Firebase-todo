
import firebase from "firebase"

const firebaseApp =firebase.initializeApp ({
   //here paste your firebase api code
  });
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

const database =firebaseApp.firestore();

export default database;