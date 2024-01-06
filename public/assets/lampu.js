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


//   teras
(function () {
  firebase.database().ref('kontrol').child('teras').on('value', function (data) {
    var sensor = data.val();
    if (sensor == "hidup") {
      $("#statusLampuTeras").text("ON");
      document.getElementById('statusLampuTeras');
    } else {
      $("#statusLampuTeras").text("OFF");
      document.getElementById('statusLampuTeras');
    }
  });
}());

//   tamu
(function () {
  firebase.database().ref('kontrol').child('ruangtamu').on('value', function (data) {
    var sensor = data.val();
    if (sensor == "hidup") {
      $("#statusLampuTamu").text("ON");
      document.getElementById('statusLampuTamu');
    } else {
      $("#statusLampuTamu").text("OFF");
      document.getElementById('statusLampuTamu');
    }
  });
}());

//   kamar 1
(function () {
  firebase.database().ref('kontrol').child('kamar').on('value', function (data) {
    var sensor = data.val();
    if (sensor == "hidup") {
      $("#statusLampuKamar1").text("ON");
      document.getElementById('statusLampuKamar1');
    } else {
      $("#statusLampuKamar1").text("OFF");
      document.getElementById('statusLampuKamar1');
    }
  });
}());

//   kamar 2
(function () {
  firebase.database().ref('kontrol').child('kamar2').on('value', function (data) {
    var sensor = data.val();
    if (sensor == "hidup") {
      $("#statusLampuKamar2").text("ON");
      document.getElementById('statusLampuKamar2');
    } else {
      $("#statusLampuKamar2").text("OFF");
      document.getElementById('statusLampuKamar2');
    }
  });
}());

//   dapur
(function () {
  firebase.database().ref('kontrol').child('dapur').on('value', function (data) {
    var sensor = data.val();
    if (sensor == "hidup") {
      $("#statusLampuDapur").text("ON");
      document.getElementById('statusLampuDapur');
    } else {
      $("#statusLampuDapur").text("OFF");
      document.getElementById('statusLampuDapur');
    }
  });
}());

//   toilet
(function () {
  firebase.database().ref('kontrol').child('toilet').on('value', function (data) {
    var sensor = data.val();
    if (sensor == "hidup") {
      $("#statusLampuToilet").text("ON");
      document.getElementById('statusLampuToilet');
    } else {
      $("#statusLampuToilet").text("OFF");
      document.getElementById('statusLampuToilet');
    }
  });
}());

(function () {
  firebase.database().ref('Lampu/On').child('Jam').on('value', function (data) {
    var Jam = data.val();
    document.getElementById('jamon').innerHTML = "<h4 style='color: white'>" + Jam + ":" + "</h4>"
  });
}());

(function () {
  firebase.database().ref('Lampu/On').child('Menit').on('value', function (data) {
    var Menit = data.val();
    document.getElementById('meniton').innerHTML = "<h4 style='color: white'>" + Menit + " " + "WIB" + "</h4>"
  });
}());

(function () {
  firebase.database().ref('Lampu/Off').child('Jam').on('value', function (data) {
    var Jam = data.val();
    document.getElementById('jamoff').innerHTML = "<h4 style='color: white'>" + Jam + ":" + "</h4>"
  });
}());

(function () {
  firebase.database().ref('Lampu/Off').child('Menit').on('value', function (data) {
    var Menit = data.val();
    document.getElementById('menitoff').innerHTML = "<h4 style='color: white'>" + Menit + " " + "WIB" + "</h4>"
  });
}());