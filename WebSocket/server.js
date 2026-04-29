// server.js
// Eksperimen 1: Server WebSocket paling sederhana

const WebSocket = require('ws');

// Buat server WebSocket yang mendengarkan di port 8080
const server = new WebSocket.Server({ port: 8080 });

console.log('Server aktif di ws://localhost:8080');

// Event 'connection' terpicu setiap ada client baru yang terhubung
server.on('connection', function(socket) {
  console.log('Ada client baru terhubung!');

  // Kirim pesan sambutan ke client
  socket.send('Halo! Kamu berhasil terhubung ke server WebSocket.');

  // Event 'message' terpicu setiap ada pesan masuk dari client
  socket.on('message', function(data) {
    const pesan = data.toString();
    console.log('Pesan masuk:', pesan);

    // Kirim balik pesan ke client (echo)
    socket.send('Server terima: ' + pesan);
  });

  // Event 'close' terpicu ketika client memutus koneksi
  socket.on('close', function() {
    console.log('Client terputus.');
  });
});
