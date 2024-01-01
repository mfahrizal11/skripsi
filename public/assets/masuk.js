// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const database = getDatabase(app);
// let signinButton = document.getElementById("loginBtn");
let signupButton = document.getElementById("registerBtn");

signupButton.addEventListener("click", (e) => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let emailSignup = document.getElementById("registerEmail").value;
  let passwordSignup = document.getElementById("registerPassword").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: emailSignup,
        password: passwordSignup
      })
        .then(() => {
          // Data saved successfully!
          alert("user telah sukses dibuat");
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);

    });
});

// signinButton.addEventListener("click", (e) => {
//   let emailSignin = document.getElementById("emailLogin").value;
//   let passwordSignin = document.getElementById("passwordLogin").value;
//   signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       let lgDate = new Date();
//       update(ref(database, "users/" + user.uid), {
//         last_login: lgDate
//       })
//         .then(() => {
//           // Data saved successfully!
//           //   alert("user telah sukses login");
//           location.href = "../home2.html";
//         })
//         .catch((error) => {
//           //the write failed
//           alert(error);
//         });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
//   signOut(auth)
//     .then(() => { })
//     .catch((error) => { });
// });