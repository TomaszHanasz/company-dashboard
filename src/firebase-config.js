import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRdn2a_eS6vGKNqxonbA9DD4vBrSvQSv4",
  authDomain: "company-dashboard-77b79.firebaseapp.com",
  databaseURL: "https://company-dashboard-77b79-default-rtdb.firebaseio.com",
  projectId: "company-dashboard-77b79",
  storageBucket: "company-dashboard-77b79.appspot.com",
  messagingSenderId: "259563748638",
  appId: "1:259563748638:web:687479481d19752c931d0f",
  measurementId: "G-6PLMXF8RWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//From here is us adding stuff
//we are getting access to firestore database
const db = getFirestore(app);

//auth
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

export { app, db, auth };
