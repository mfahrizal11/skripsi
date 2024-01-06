import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
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
let signinButton = document.getElementById("loginBtn");
// let signupButton = document.getElementById("registerBtn");

// signupButton.addEventListener("click", (e) => {
//   let firstName = document.getElementById("firstName").value;
//   let lastName = document.getElementById("lastName").value;
//   let emailSignup = document.getElementById("registerEmail").value;
//   let passwordSignup = document.getElementById("registerPassword").value;

//   createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;

//       set(ref(database, "users/" + user.uid), {
//         firstName: firstName,
//         lastName: lastName,
//         email: emailSignup,
//         password: passwordSignup
//       })
//         .then(() => {
//           // Data saved successfully!
//           alert("user telah sukses dibuat");
//         })
//         .catch((error) => {
//           //the write failed
//           alert(error);
//         });
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       alert(errorMessage);

//     });
// });

signinButton.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah pengiriman formulir default

  let emailSignin = document.getElementById("emailLogin").value;
  let passwordSignin = document.getElementById("passwordLogin").value;

  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Berhasil login
      const user = userCredential.user;

      let lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate
      })
        .then(() => {
          // Data disimpan dengan sukses
          //   alert("user telah sukses login");
          location.href = "../public/home2.html";
        })
        .catch((error) => {
          // Kesalahan saat menyimpan data
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  signOut(auth)
    .then(() => { })
    .catch((error) => { });
});
