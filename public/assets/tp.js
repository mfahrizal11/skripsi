// tombol teras
$(document).ready(function () {
  var database = firebase.database();
  var teras, ruangtamu, kamar, kamar2, dapur, toilet;

  function getCurrentDateTime() {
    const now = moment();
    const currentDate = now.format('DD-MM-YYYY'); // Menggunakan format 'DD-MM-YYYY' untuk tanggal
    const currentTime = now.format('HH:mm:ss'); // Menggunakan format 'HH:mm:ss' untuk waktu

    return { Tanggal: currentDate, Waktu: currentTime };
  }

  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;

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
    var currentDateTime = getCurrentDateTime();

    if (teras == "hidup") {
      firebaseRef.set("mati");
      teras = "mati";
    } else {
      firebaseRef.set("hidup");
      teras = "hidup";
    }

    var key = database.ref().child('Data').push().key;
    var dataToSave = {
      teras: teras,
      ruangtamu: ruangtamu,
      kamar: kamar,
      kamar2: kamar2,
      dapur: dapur,
      toilet: toilet,
      Tanggal: currentDateTime.Tanggal, // Menggunakan nama properti "Tanggal" di Firebase
      Waktu: currentDateTime.Waktu // Menggunakan nama properti "Waktu" di Firebase
    };

    database.ref('Data/' + key).set(dataToSave);
  });
});


// tamu
$(document).ready(function () {
  var database = firebase.database();
  var teras, ruangtamu, kamar, kamar2, dapur, toilet;

  function getCurrentDateTime() {
    const now = moment();
    const currentDate = now.format('DD-MM-YYYY'); // Menggunakan format 'DD-MM-YYYY' untuk tanggal
    const currentTime = now.format('HH:mm:ss'); // Menggunakan format 'HH:mm:ss' untuk waktu

    return { Tanggal: currentDate, Waktu: currentTime };
  }

  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;

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
    var currentDateTime = getCurrentDateTime();

    if (ruangtamu == "hidup") {
      firebaseRef.set("mati");
      ruangtamu = "mati";
    } else {
      firebaseRef.set("hidup");
      ruangtamu = "hidup";
    }

    var key = database.ref().child('Data').push().key;
    var dataToSave = {
      teras: teras,
      ruangtamu: ruangtamu,
      kamar: kamar,
      kamar2: kamar2,
      dapur: dapur,
      toilet: toilet,
      Tanggal: currentDateTime.Tanggal, // Menggunakan nama properti "Tanggal" di Firebase
      Waktu: currentDateTime.Waktu // Menggunakan nama properti "Waktu" di Firebase
    };

    database.ref('Data/' + key).set(dataToSave);
  });
});

// kamar
$(document).ready(function () {
  var database = firebase.database();
  var teras, ruangtamu, kamar, kamar2, dapur, toilet;

  function getCurrentDateTime() {
    const now = moment();
    const currentDate = now.format('DD-MM-YYYY'); // Menggunakan format 'DD-MM-YYYY' untuk tanggal
    const currentTime = now.format('HH:mm:ss'); // Menggunakan format 'HH:mm:ss' untuk waktu

    return { Tanggal: currentDate, Waktu: currentTime };
  }

  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;

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
    var currentDateTime = getCurrentDateTime();

    if (kamar == "hidup") {
      firebaseRef.set("mati");
      kamar = "mati";
    } else {
      firebaseRef.set("hidup");
      kamar = "hidup";
    }

    var key = database.ref().child('Data').push().key;
    var dataToSave = {
      teras: teras,
      ruangtamu: ruangtamu,
      kamar: kamar,
      kamar2: kamar2,
      dapur: dapur,
      toilet: toilet,
      Tanggal: currentDateTime.Tanggal, // Menggunakan nama properti "Tanggal" di Firebase
      Waktu: currentDateTime.Waktu // Menggunakan nama properti "Waktu" di Firebase
    };

    database.ref('Data/' + key).set(dataToSave);
  });
});

// kamar2
$(document).ready(function () {
  var database = firebase.database();
  var teras, ruangtamu, kamar, kamar2, dapur, toilet;

  function getCurrentDateTime() {
    const now = moment();
    const currentDate = now.format('DD-MM-YYYY'); // Menggunakan format 'DD-MM-YYYY' untuk tanggal
    const currentTime = now.format('HH:mm:ss'); // Menggunakan format 'HH:mm:ss' untuk waktu

    return { Tanggal: currentDate, Waktu: currentTime };
  }

  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;

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
    var currentDateTime = getCurrentDateTime();

    if (kamar2 == "hidup") {
      firebaseRef.set("mati");
      kamar2 = "mati";
    } else {
      firebaseRef.set("hidup");
      kamar2 = "hidup";
    }

    var key = database.ref().child('Data').push().key;
    var dataToSave = {
      teras: teras,
      ruangtamu: ruangtamu,
      kamar: kamar,
      kamar2: kamar2,
      dapur: dapur,
      toilet: toilet,
      Tanggal: currentDateTime.Tanggal, // Menggunakan nama properti "Tanggal" di Firebase
      Waktu: currentDateTime.Waktu // Menggunakan nama properti "Waktu" di Firebase
    };

    database.ref('Data/' + key).set(dataToSave);
  });
});

// dapur
$(document).ready(function () {
  var database = firebase.database();
  var teras, ruangtamu, kamar, kamar2, dapur, toilet;

  function getCurrentDateTime() {
    const now = moment();
    const currentDate = now.format('DD-MM-YYYY'); // Menggunakan format 'DD-MM-YYYY' untuk tanggal
    const currentTime = now.format('HH:mm:ss'); // Menggunakan format 'HH:mm:ss' untuk waktu

    return { Tanggal: currentDate, Waktu: currentTime };
  }

  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;

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
    var currentDateTime = getCurrentDateTime();

    if (dapur == "hidup") {
      firebaseRef.set("mati");
      dapur = "mati";
    } else {
      firebaseRef.set("hidup");
      dapur = "hidup";
    }

    var key = database.ref().child('Data').push().key;
    var dataToSave = {
      teras: teras,
      ruangtamu: ruangtamu,
      kamar: kamar,
      kamar2: kamar2,
      dapur: dapur,
      toilet: toilet,
      Tanggal: currentDateTime.Tanggal, // Menggunakan nama properti "Tanggal" di Firebase
      Waktu: currentDateTime.Waktu // Menggunakan nama properti "Waktu" di Firebase
    };

    database.ref('Data/' + key).set(dataToSave);
  });
});

// toilet
$(document).ready(function () {
  var database = firebase.database();
  var teras, ruangtamu, kamar, kamar2, dapur, toilet;

  function getCurrentDateTime() {
    const now = moment();
    const currentDate = now.format('DD-MM-YYYY'); // Menggunakan format 'DD-MM-YYYY' untuk tanggal
    const currentTime = now.format('HH:mm:ss'); // Menggunakan format 'HH:mm:ss' untuk waktu

    return { Tanggal: currentDate, Waktu: currentTime };
  }

  database.ref('kontrol').on("value", function (snap) {
    teras = snap.val().teras;
    ruangtamu = snap.val().ruangtamu;
    kamar = snap.val().kamar;
    kamar2 = snap.val().kamar2;
    dapur = snap.val().dapur;
    toilet = snap.val().toilet;

    if (toilet == "hidup") {
      document.getElementById("off6").style.display = "none";
      document.getElementById("on6").style.display = "block";
    } else {
      document.getElementById("off6").style.display = "block";
      document.getElementById("on6").style.display = "none";
    }
  });

  $(".to5").click(function () {
    var firebaseRef = firebase.database().ref('kontrol').child("dapur");
    var currentDateTime = getCurrentDateTime();

    if (dapur == "hidup") {
      firebaseRef.set("mati");
      dapur = "mati";
    } else {
      firebaseRef.set("hidup");
      dapur = "hidup";
    }

    var key = database.ref().child('Data').push().key;
    var dataToSave = {
      teras: teras,
      ruangtamu: ruangtamu,
      kamar: kamar,
      kamar2: kamar2,
      dapur: dapur,
      toilet: toilet,
      Tanggal: currentDateTime.Tanggal, // Menggunakan nama properti "Tanggal" di Firebase
      Waktu: currentDateTime.Waktu // Menggunakan nama properti "Waktu" di Firebase
    };

    database.ref('Data/' + key).set(dataToSave);
  });
});


//  status
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

});