import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

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