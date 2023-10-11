// Membaca data dari file JSON
const jsonData = JSON.parse(fs.readFileSync('C:/skripsi/public/2minggu.json'));

// Mengubah data waktu menjadi detik sejak tengah malam
const habitData = [];
for (const key in jsonData.Data) {
  if (jsonData.Data.hasOwnProperty(key)) {
    const value = jsonData.Data[key];
    const waktu = new Date(`1970-01-01T${value.Waktu}Z`);
    const waktuDetik = waktu.getHours() * 3600 + waktu.getMinutes() * 60 + waktu.getSeconds();
    habitData.push([
      waktuDetik,
      value.dapur === 'hidup' ? 1 : 0,
      value.kamarUtama === 'hidup' ? 1 : 0,
      value.kamarKedua === 'hidup' ? 1 : 0,
      value.ruangTamu === 'hidup' ? 1 : 0,
      value.teras === 'hidup' ? 1 : 0,
      value.toilet === 'hidup' ? 1 : 0
    ]);
  }
}

// Fungsi untuk menghitung jarak Euclidean hanya berdasarkan waktu
function euclideanDistance(x1, x2) {
  return Math.abs(x1 - x2);
}

// Fungsi untuk memprediksi keadaan lampu berdasarkan waktu terdekat
function predictLightsByTime(time, k) {
  const waktu = new Date(`1970-01-01T${time}Z`);
  const waktuDetik = waktu.getHours() * 3600 + waktu.getMinutes() * 60 + waktu.getSeconds();
  const habits = [
    waktuDetik,
    ...(jsonData.Data['-NUbhKQusYWmh4qcwaEW'] ? [jsonData.Data['-NUbhKQusYWmh4qcwaEW'].dapur === 'hidup' ? 1 : 0,
    jsonData.Data['-NUbhKQusYWmh4qcwaEW'].kamarUtama === 'hidup' ? 1 : 0,
    jsonData.Data['-NUbhKQusYWmh4qcwaEW'].kamarKedua === 'hidup' ? 1 : 0,
    jsonData.Data['-NUbhKQusYWmh4qcwaEW'].ruangTamu === 'hidup' ? 1 : 0,
    jsonData.Data['-NUbhKQusYWmh4qcwaEW'].teras === 'hidup' ? 1 : 0,
    jsonData.Data['-NUbhKQusYWmh4qcwaEW'].toilet === 'hidup' ? 1 : 0
    ] : [0, 0, 0, 0, 0, 0])
  ];

  // Menghitung jarak Euclidean hanya berdasarkan waktu dengan semua data dalam habitData
  const distances = habitData.map(habit => euclideanDistance(habit[0], habits[0]));

  // Mengambil indeks k tetangga terdekat
  const kIndices = Array.from({ length: k }, (_, i) => i)
    .sort((a, b) => distances[a] - distances[b]);

  // Mengambil status lampu dari k tetangga terdekat
  const neighborLights = kIndices.map(index => habitData[index].slice(1));

  const nNeighbors = kIndices.length;
  const predictedLights = [];
  for (let i = 0; i < neighborLights[0].length; i++) {
    const lamp = neighborLights.map(neighbor => neighbor[i]);
    const lampState = lamp.reduce((acc, val) => acc + val, 0) > nNeighbors / 2 ? 1 : 0;
    predictedLights.push(lampState);
  }

  return predictedLights;
}

// Masukkan waktu baru di sini
// const waktuTerbaru = new Date();
// const formattedTime = waktuTerbaru.toISOString().substr(11, 8);
// const newTime = formattedTime; // Contoh waktu baru
// const kNeighbors = 3;

const predictedLights = predictLightsByTime(newTime, kNeighbors);
console.log("Hasil prediksi keadaan lampu (0: mati, 1: hidup):");
console.log(predictedLights);

const actualData = jsonData.Data;

const predictedData = {};
for (const key in actualData) {
  if (actualData.hasOwnProperty(key)) {
    const value = actualData[key];
    const waktu = value.Waktu;
    const predictedLights = predictLightsByTime(waktu, kNeighbors);
    predictedData[key] = predictedLights;
  }
}

// Inisialisasi confusion matrix
const confusionMatrix = {
  truePositive: 0,
  falsePositive: 0,
  trueNegative: 0,
  falseNegative: 0
};

for (const key in actualData) {
  if (actualData.hasOwnProperty(key)) {
    const value = actualData[key];
    const actualLights = [
      value.dapur === 'hidup' ? 1 : 0,
      value.kamarUtama === 'hidup' ? 1 : 0,
      value.kamarKedua === 'hidup' ? 1 : 0,
      value.ruangTamu === 'hidup' ? 1 : 0,
      value.teras === 'hidup' ? 1 : 0,
      value.toilet === 'hidup' ? 1 : 0
    ];
    const predictedLights = predictedData[key];

    for (let i = 0; i < actualLights.length; i++) {
      if (actualLights[i] === 1 && predictedLights[i] === 1) {
        confusionMatrix.truePositive++;
      } else if (actualLights[i] === 0 && predictedLights[i] === 1) {
        confusionMatrix.falsePositive++;
      } else if (actualLights[i] === 0 && predictedLights[i] === 0) {
        confusionMatrix.trueNegative++;
      } else if (actualLights[i] === 1 && predictedLights[i] === 0) {
        confusionMatrix.falseNegative++;
      }
    }
  }
}

const accuracy = (confusionMatrix.truePositive + confusionMatrix.trueNegative) / (confusionMatrix.truePositive + confusionMatrix.falsePositive + confusionMatrix.trueNegative + confusionMatrix.falseNegative);
console.log("Tingkat Akurasi:", accuracy);

const predictButton = document.getElementById("predictButton");
const resultDiv = document.getElementById("result");

predictButton.addEventListener("click", () => {
  const waktuTerbaru = new Date();
  const formattedTime = waktuTerbaru.toISOString().substr(11, 8);
  const newTime = formattedTime; // Contoh waktu baru
  const kNeighbors = 3;

  const predictedLights = predictLightsByTime(newTime, kNeighbors);

  // Tampilkan hasil prediksi di dalam elemen HTML
  resultDiv.innerHTML = "Hasil prediksi keadaan lampu (0: mati, 1: hidup):<br>" + predictedLights.join(", ");
});