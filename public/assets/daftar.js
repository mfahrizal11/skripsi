import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAThfImJZpVTK5Zm9SAIiZ-yeIGL2NAQjY",
  authDomain: "skripsi-6a6f2.firebaseapp.com",
  databaseURL: "https://skripsi-6a6f2-default-rtdb.firebaseio.com",
  projectId: "skripsi-6a6f2",
  storageBucket: "skripsi-6a6f2.appspot.com",
  messagingSenderId: "257791345812",
  appId: "1:257791345812:web:86e2954521a30521b9a081",
  measurementId: "G-9M95CDD0J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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