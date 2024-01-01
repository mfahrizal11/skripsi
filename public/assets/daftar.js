import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJInWciPDOdJLOj1JvUs3QzVKMQPsMTEo",
  authDomain: "lampu-9ea22.firebaseapp.com",
  databaseURL: "https://lampu-9ea22-default-rtdb.firebaseio.com",
  projectId: "lampu-9ea22",
  storageBucket: "lampu-9ea22.appspot.com",
  messagingSenderId: "490245677046",
  appId: "1:490245677046:web:15f7d71e093b99d5f7f1d7"
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