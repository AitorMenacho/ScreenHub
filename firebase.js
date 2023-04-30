import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg4WnxKjEPtjtnKCGry1m7WI_taCR6D98",
  authDomain: "screenhub-e68df.firebaseapp.com",
  databaseURL:
    "https://screenhub-e68df-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "screenhub-e68df",
  storageBucket: "screenhub-e68df.appspot.com",
  messagingSenderId: "841794359724",
  appId: "1:841794359724:web:7a31506db61971ae07ea09",
  measurementId: "G-9SG8Z6WLP6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
