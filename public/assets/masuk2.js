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
const database = getDatabase(app);

var email = document.getElementById("emailLogin");
var password = document.getElementById("passwordLogin");
window.login = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("logined Successfully")
      var aaaa = (success.user.uid);
      localStorage.setItem("uid", aaaa)
      console.log(aaaa)



      window.location.replace('home2.html')
      // localStorage.setItem(success,user,uid)

    })
    .catch(function (err) {
      alert("Email atau password salah ");
    });

  console.log(obj);
}