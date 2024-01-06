import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSS7Wew4smBVU4JjIIPNUk4_gFx8mvetk",
  authDomain: "skripsilampu.firebaseapp.com",
  databaseURL: "https://skripsilampu-default-rtdb.firebaseio.com",
  projectId: "skripsilampu",
  storageBucket: "skripsilampu.appspot.com",
  messagingSenderId: "108591468141",
  appId: "1:108591468141:web:1d05f7c26550486d7ab964",
  measurementId: "G-0Z6N7Y73E0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database= getDatabase(app);

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("registerEmail");
var password = document.getElementById("registerPassword");
var coPassword = document.getElementById("coPassword")
window.signup = function (e) {
  if (password)

    if (firstName == "" || lastName.value == "" || email.value == "" || password.value == "") {
      alert("All Field Are Required")
    }
  if (password.value == coPassword.value) {

  } else {
    alert("Password Confirmation is Wrong")
    return false
  }

  e.preventDefault();
  var obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      window.location.replace('login.html')
      // console.log(success.user.uid)
      alert("signup successfully")
    })
    .catch(function (err) {
      alert("Error in " + err)
    });
  console.log()
  console.log(obj);
};