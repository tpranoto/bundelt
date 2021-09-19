import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCU0CgMza2o13zL4Xtgz_0J11d3MUWivTg",
  authDomain: "bundelt-411e2.firebaseapp.com",
  projectId: "bundelt-411e2",
  storageBucket: "bundelt-411e2.appspot.com",
  messagingSenderId: "394748186234",
  appId: "1:394748186234:web:cfbd1cb344afe0ed7635c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
