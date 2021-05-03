import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFo_Q56BLVON1SduGJJmJQLd4oR14JnCc",
  authDomain: "facebook-clone-503c7.firebaseapp.com",
  projectId: "facebook-clone-503c7",
  storageBucket: "facebook-clone-503c7.appspot.com",
  messagingSenderId: "1081708917041",
  appId: "1:1081708917041:web:21c61e2739e6e76e7b8010",
  measurementId: "G-TKPSPSQY1X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
