// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj_LenAbaqNEsmQctCb9mYrr1dTod3JAA",
  authDomain: "screenhub-551b8.firebaseapp.com",
  databaseURL:
    "https://screenhub-551b8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "screenhub-551b8",
  storageBucket: "screenhub-551b8.appspot.com",
  messagingSenderId: "866923208876",
  appId: "1:866923208876:web:0927f02d8249d7168fbf09",
  measurementId: "G-TW9VWQ9F7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.database();

export default db;
