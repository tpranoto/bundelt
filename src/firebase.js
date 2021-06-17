import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlW4jYt4FHYRAnXv6Mc7C6TFq8H4i-Fo4",
    authDomain: "bundelt-8dc1e.firebaseapp.com",
    projectId: "bundelt-8dc1e",
    storageBucket: "bundelt-8dc1e.appspot.com",
    messagingSenderId: "655768743090",
    appId: "1:655768743090:web:4e4ed4377239336ad06dab",
    measurementId: "G-W98FEMN4KX"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
