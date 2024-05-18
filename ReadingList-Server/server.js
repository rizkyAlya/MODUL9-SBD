// Mengimpor modul-modul yang akan digunakan
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

//const User = require("./models/userSchema");
const userController = require("./controllers/userController");// Mengimpor repository UserRepo yang berisi operasi-operasi terkait pengguna

const app = express();
const PORT = process.env.PORT; 

app.use(express.json()); // Menggunakan middleware untuk mengizinkan penggunaan JSON dalam permintaan
app.use(express.urlencoded({ extended: true })); // Menggunakan middleware untuk mengizinkan penggunaan URL-encoded dalam permintaan

app.use(
    cors({
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;// Mendapatkan koneksi database MongoDB

db.on('error', console.error.bind(console, 'connection error: '));// Menangani kesalahan koneksi database

// Menangani koneksi database yang berhasil
db.once('open', function(){
    console.log('Connected to MongoDB AliyahRizky');
});

// Definisi Endpoint untuk menangani berbagai jenis permintaan HTTP terkait pengguna
app.post("/loginUser", userController.loginUser);
app.post("/addUser", userController.addUser); // Endpoint untuk menambahkan pengguna baru
app.get("/getAllUsers", userController.getAllUsers);
app.put("/updateUser/:username", userController.updateUser); // Endpoint untuk memperbarui pengguna berdasarkan NPM
app.delete("/deleteUser/:username", userController.deleteUser); // Endpoint untuk menghapus pengguna berdasarkan NPM

// Menjalankan server dan mendengarkan permintaan pada port yang ditentukan
app.listen(PORT, () => console.log(`Server started at port:${PORT}`));
