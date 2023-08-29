var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);


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