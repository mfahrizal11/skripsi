import json
import numpy as np
from datetime import datetime

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
        1 if value['kamar'] == 'hidup' else 0,
        1 if value['kamar2'] == 'hidup' else 0,
        1 if value['ruangtamu'] == 'hidup' else 0,
        1 if value['teras'] == 'hidup' else 0,
        1 if value['toilet'] == 'hidup' else 0
    ])

habit_data = np.array(habit_data)

# Nama-nama lampu
lampu_names = ['dapur', 'kamar', 'kamar2', 'ruangtamu', 'teras', 'toilet']

# Fungsi untuk menghitung jarak Euclidean hanya berdasarkan waktu
def euclidean_distance(x1, x2):
    return np.abs(x1 - x2)

# Fungsi untuk memprediksi keadaan lampu berdasarkan waktu terdekat
def predict_lights_by_time(time, k):
    waktu = datetime.strptime(time, "%H:%M:%S")
    waktu_detik = waktu.hour * 3600 + waktu.minute * 60 + waktu.second
    habits = np.array([
        waktu_detik,
        *[1 if value == 'hidup' else 0 for value in data['Data']['-NUbhKQusYWmh4qcwaEW'].values()]
    ])

    # Menghitung jarak Euclidean hanya berdasarkan waktu dengan semua data dalam habit_data
    distances = [euclidean_distance(habits[0], habit[0]) for habit in habit_data]

    # Mengambil indeks k tetangga terdekat
    k_indices = np.argsort(distances)[:k]

    # Mengambil status lampu dari k tetangga terdekat
    neighbor_lights = habit_data[k_indices][:, 1:]

    n_neighbors = len(k_indices)
    predicted_lights = []
    for lamp in neighbor_lights.T:
        lamp_state = 1 if np.sum(lamp) > n_neighbors / 2 else 0
        predicted_lights.append(lamp_state)

    return predicted_lights

# Masukkan waktu baru di sini
waktu_terbaru = datetime.now()
formatted_time = waktu_terbaru.strftime("%H:%M:%S")
new_time = formatted_time  # Contoh waktu baru
k_neighbors = 3

predicted_lights = predict_lights_by_time(new_time, k_neighbors)
print("Hasil prediksi keadaan lampu (0: mati, 1: hidup):")
for i, lamp_state in enumerate(predicted_lights):
    lamp_name = lampu_names[i]
    print(f"{lamp_name}: {lamp_state}")
