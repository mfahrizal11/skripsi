import json
import numpy as np
from datetime import datetime
from sklearn.neighbors import NearestNeighbors

# Membaca data dari file JSON
with open('C:/skripsi/public/2minggu.json') as json_file:
    data = json.load(json_file)

# Mengubah data waktu menjadi detik sejak tengah malam
habit_data = []
for key, value in data['Data'].items():
    waktu = datetime.strptime(value['Waktu'], "%H:%M:%S")
    waktu_detik = waktu.hour * 3600 + waktu.minute * 60 + waktu.second
    habit_data.append([
        waktu_detik,
        1 if value['dapur'] == 'hidup' else 0,
        1 if value['kamarUtama'] == 'hidup' else 0,
        1 if value['kamarKedua'] == 'hidup' else 0,
        1 if value['ruangTamu'] == 'hidup' else 0,
        1 if value['teras'] == 'hidup' else 0,
        1 if value['toilet'] == 'hidup' else 0
    ])

habit_data = np.array(habit_data)

# Inisialisasi model KNN dengan nilai tetangga (n_neighbors) yang sesuai
n_neighbors = 3
knn_model = NearestNeighbors(n_neighbors=n_neighbors)
knn_model.fit(habit_data)

# Fungsi untuk memprediksi keadaan lampu berdasarkan waktu terdekat
def predict_lights_by_time(time):
    waktu = datetime.strptime(time, "%H:%M:%S")
    waktu_detik = waktu.hour * 3600 + waktu.minute * 60 + waktu.second
    habits = [waktu_detik, 0, 0, 0, 0, 0, 0]  # Ganti nilai berdasarkan kebiasaan waktu tersebut
    habits = np.array(habits).reshape(1, -1)
    distances, indices = knn_model.kneighbors(habits)
    neighbor_lights = np.mean(habit_data[indices[0]][:, 1:], axis=0)
    return ['hidup' if light > n_neighbors / 2 else 'mati' for light in neighbor_lights]

# Masukkan waktu baru di sini
new_time = "06:30:00"  # Contoh waktu baru

predicted_lights = predict_lights_by_time(new_time)
print("Hasil prediksi keadaan lampu: ", predicted_lights)
