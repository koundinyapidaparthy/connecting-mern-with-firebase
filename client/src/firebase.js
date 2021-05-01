import firebase from "firebase";
const   firebaseConfig = {
    apiKey: "AIzaSyDWST3aHZVfD8CqpyB2N4ld3DAEElf9gNE",
    authDomain: "mern-with-firebase.firebaseapp.com",
    projectId: "mern-with-firebase",
    storageBucket: "mern-with-firebase.appspot.com",
    messagingSenderId: "1053395997634",
    appId: "1:1053395997634:web:f79f63cfeabe7437f0bc5b"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider1 = new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export {auth,provider1,storage}
  export default db;