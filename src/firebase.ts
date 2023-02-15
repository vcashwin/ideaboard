// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsCSte3nJlgh0Fsv1zBcZQ77dGGxhnEpI",
  authDomain: "ideaboard-73b9d.firebaseapp.com",
  projectId: "ideaboard-73b9d",
  storageBucket: "ideaboard-73b9d.appspot.com",
  messagingSenderId: "107132644161",
  appId: "1:107132644161:web:ce4b7992661ff7a3c00fc0",
  measurementId: "G-FWC732GEKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
