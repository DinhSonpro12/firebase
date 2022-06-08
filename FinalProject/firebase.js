// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj3B2jCPUcHm5XEih8YK87qr0wHaORtuw",
  authDomain: "reactnativefire-f0377.firebaseapp.com",
  databaseURL: "https://reactnativefire-f0377-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactnativefire-f0377",
  storageBucket: "reactnativefire-f0377.appspot.com",
  messagingSenderId: "305324322492",
  appId: "1:305324322492:web:90d727be709aea2620aab9",
  measurementId: "G-FZLC7R5P8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };