// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvTkKStvQsgqr5J6_OdVaymEl-ZNlfzAU",
  authDomain: "travel-planner-e38d1.firebaseapp.com",
  projectId: "travel-planner-e38d1",
  storageBucket: "travel-planner-e38d1.appspot.com",
  messagingSenderId: "390219292166",
  appId: "1:390219292166:web:59d4ffa2ed6358fdf3ad87",
  measurementId: "G-5V0WRFNRNH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
