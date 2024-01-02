import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

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