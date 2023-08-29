// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAThfImJZpVTK5Zm9SAIiZ-yeIGL2NAQjY",
    authDomain: "skripsi-6a6f2.firebaseapp.com",
    projectId: "skripsi-6a6f2",
    storageBucket: "skripsi-6a6f2.appspot.com",
    messagingSenderId: "257791345812",
    appId: "1:257791345812:web:86e2954521a30521b9a081",
    measurementId: "G-9M95CDD0J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);