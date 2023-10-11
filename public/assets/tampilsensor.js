// tombol teras
$(document).ready(function () {
  var database = firebase.database();
  var teras;



  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;
    status = snap.val().status;

    if (teras == "hidup") {
      document.getElementById("off").style.display = "none";
      document.getElementById("on").style.display = "block";
    } else {
      document.getElementById("off").style.display = "block";
      document.getElementById("on").style.display = "none";
    }
  });

  $(".to").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("teras");

    if (teras == "hidup") { // post to firebase
      firebaseRef.set("mati");
      teras = "mati";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    } else {
      firebaseRef.set("hidup");
      teras = "hidup";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    }
  })
});

// // tombol ruang tamu
$(document).ready(function () {
  var database = firebase.database();
  var ruangtamu;



  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;
    status = snap.val().status;

    if (ruangtamu == "hidup") {
      document.getElementById("off2").style.display = "none";
      document.getElementById("on2").style.display = "block";
    } else {
      document.getElementById("off2").style.display = "block";
      document.getElementById("on2").style.display = "none";
    }
  });

  $(".to2").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("ruangtamu");

    if (ruangtamu == "hidup") { // post to firebase
      firebaseRef.set("mati");
      ruangtamu = "mati";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    } else {
      firebaseRef.set("hidup");
      ruangtamu = "hidup";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    }
  })
});
// // tombol kamar
$(document).ready(function () {
  var database = firebase.database();
  var kamar;



  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;
    status = snap.val().status;

    if (kamar == "hidup") {
      document.getElementById("off3").style.display = "none";
      document.getElementById("on3").style.display = "block";
    } else {
      document.getElementById("off3").style.display = "block";
      document.getElementById("on3").style.display = "none";
    }
  });

  $(".to3").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("kamar");

    if (kamar == "hidup") { // post to firebase
      firebaseRef.set("mati");
      kamar = "mati";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    } else {
      firebaseRef.set("hidup");
      kamar = "hidup";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    }
  })
});

// // tombol kamar2
$(document).ready(function () {
  var database = firebase.database();
  var kamar2;



  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;
    status = snap.val().status;

    if (kamar2 == "hidup") {
      document.getElementById("off4").style.display = "none";
      document.getElementById("on4").style.display = "block";
    } else {
      document.getElementById("off4").style.display = "block";
      document.getElementById("on4").style.display = "none";
    }
  });

  $(".to4").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("kamar2");

    if (kamar2 == "hidup") { // post to firebase
      firebaseRef.set("mati");
      kamar2 = "mati";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    } else {
      firebaseRef.set("hidup");
      kamar2 = "hidup";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    }
  })
});

//tombol dapur
$(document).ready(function () {
  var database = firebase.database();
  var dapur;



  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;
    status = snap.val().status;

    if (dapur == "hidup") {
      document.getElementById("off5").style.display = "none";
      document.getElementById("on5").style.display = "block";
    } else {
      document.getElementById("off5").style.display = "block";
      document.getElementById("on5").style.display = "none";
    }
  });

  $(".to5").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("dapur");

    if (dapur == "hidup") { // post to firebase
      firebaseRef.set("mati");
      dapur = "mati";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
    } else {
      firebaseRef.set("hidup");
      dapur = "hidup";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
    }
  })
});

// //tombol toilet
$(document).ready(function () {
  var database = firebase.database();
  var toilet;



  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;
    status = snap.val().status;

    if (toilet == "hidup") {
      document.getElementById("off6").style.display = "none";
      document.getElementById("on6").style.display = "block";
    } else {
      document.getElementById("off6").style.display = "block";
      document.getElementById("on6").style.display = "none";
    }
  });

  $(".to6").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("toilet");

    if (toilet == "hidup") { // post to firebase
      firebaseRef.set("mati");
      toilet = "mati";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    } else {
      firebaseRef.set("hidup");
      toilet = "hidup";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    }
  })
});


// //tombol status
$(document).ready(function () {
  var database = firebase.database();
  var status;



  database.ref('kontrol').on("value", function (snap) {
    status = snap.val().status;
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;


    if (status == "otomatis") {
      document.getElementById("manual").style.display = "none";
      document.getElementById("otomatis").style.display = "block";
    } else {
      document.getElementById("manual").style.display = "block";
      document.getElementById("otomatis").style.display = "none";
    }
  });

  $(".to7").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("status");

    if (status == "otomatis") { // post to firebase
      firebaseRef.set("manual");
      status = "manual";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    } else {
      firebaseRef.set("otomatis");
      toilet = "otomatis";
      var key = database.ref().child('Data').push().key;
      database.ref('Data/' + key + '/teras').set(teras);
      database.ref('Data/' + key + '/ruangtamu').set(ruangtamu);
      database.ref('Data/' + key + '/kamar').set(kamar);
      database.ref('Data/' + key + '/kamar2').set(kamar2);
      database.ref('Data/' + key + '/dapur').set(dapur);
      database.ref('Data/' + key + '/toilet').set(toilet);
      database.ref('Data/' + key + '/status').set(status);
    }
  })
});