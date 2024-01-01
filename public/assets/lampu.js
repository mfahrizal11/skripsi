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