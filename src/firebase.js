import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2PBbNrZNXYRYHs6ez5CkBuvFfVdgkKLc",
  authDomain: "clone-ea5b2.firebaseapp.com",
  databaseURL: "https://clone-ea5b2.firebaseio.com",
  projectId: "clone-ea5b2",
  storageBucket: "clone-ea5b2.appspot.com",
  messagingSenderId: "1054422841686",
  appId: "1:1054422841686:web:c6564825d134e5baeafef7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
