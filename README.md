Membongkar Komunikasi Real-Time di Era Web Modern

Nama : Nadia Aulina Safari

NIM : 312410258

Kelas : I241A

Mata Kuliah : Pemrograman Web 2

Topik : WebSocket

Program Studi Teknik Informatika, Universitas Pelita Bangsa

Instalasi Node.js
pastikan Node.js sudah terinstal. Buka terminal dan cek versinya:

<img width="965" height="695" alt="image" src="https://github.com/user-attachments/assets/0f3e9a9f-c8c4-44a3-8958-c02be54873be" />





Kemudian buat folder proyek baru dan instal library WebSocket yang akan kita pakai:
Karena saya sudah memiliki folder proyek bernama WebSocket, saya langsung masuk ke
folder tersebut dan menjalankan perintah instalasi:

<img width="994" height="775" alt="image" src="https://github.com/user-attachments/assets/feea7ffe-b004-4f7e-a86a-a7762aa75f2e" />





Langkah 1: Jalankan Server.js
Di terminal (saya pakai Command Prompt), pastikan dulu sedang berada di folder proyek.
Lalu ketik:
<img width="977" height="222" alt="image" src="https://github.com/user-attachments/assets/fe09f7f8-c03a-4be3-b49b-3a4694b5b0ac" />



Langkah 2: Membuka client di browser
Dengan server masih berjalan (jangan ditutup terminalnya!), saya buka file index.html di
browser. Caranya: di VS Code, klik kanan file index.html lalu pilih "Reveal in File
Explorer", lalu double klik file tersebut.
di terminal muncul pesan:

<img width="916" height="85" alt="image" src="https://github.com/user-attachments/assets/1d1911bc-fd41-4981-ae17-02c57b94d517" />







Langkah 3: Mengirim Pesan
Di halaman browser, saya ketik pesan: "Halo, ini Tugas UTS WebSocket!" lalu klik Kirim.
Hasilnya:
• Di log browser muncul: "Saya: Halo, ini Tugas UTS WebSocket!"
• Lalu beberapa saat kemudian muncul: "Server: Server bilang: Halo, ini Tugas UTS
WebSocket!"
• Di terminal server muncul: "Pesan dari client: Halo, ini Tugas UTS WebSocket!"

<img width="688" height="281" alt="image" src="https://github.com/user-attachments/assets/8e782111-e85b-4f70-a17a-06d411ce11fa" />





<img width="782" height="296" alt="image" src="https://github.com/user-attachments/assets/9491b81c-be0b-43ab-b27e-d9e3422cb73b" />





<img width="796" height="281" alt="image" src="https://github.com/user-attachments/assets/64921225-6555-4f8e-99eb-f66593fc8787" />





<img width="804" height="89" alt="image" src="https://github.com/user-attachments/assets/22dfd5cc-bf60-4e71-a078-3fb5009174b3" />







