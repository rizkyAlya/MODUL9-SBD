// Mengimpor modul-modul yang akan digunakan
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const userController = require("./controllers/userController");
const bookController = require("./controllers/bookController");

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

// Definisi Endpoint untuk User
app.post("/loginUser", userController.loginUser); // Endpoint untu login akun pengguna
app.post("/addUser", userController.addUser); // Endpoint untuk menambahkan pengguna baru
app.get("/getAllUsers", userController.getAllUsers); // Endpoint untuk mendapartkan semua pengguna
app.put("/updateUser/:username", userController.updateUser); // Endpoint untuk memperbarui pengguna berdasarkan username
//app.delete("/deleteUser/:username", userController.deleteUser); // Endpoint untuk menghapus pengguna berdasarkan username

// Definisi Endpoint untuk Book
app.post("/addBook", bookController.addBook); // Endpoint untuk menambahkan buku ke reading list
app.get("/getAllBooks", bookController.getAllBooks); // Endpoint untuk mendapatkan semua reading list
app.delete("/deleteBook/:title", bookController.deleteBook); // Endpoint untuk menambahkan pengguna baru
//app.post("/addToList", bookController.addToList); // Endpoint untuk menambahkan buku ke reading list dari seorang pengguna
//app.post("/deleteFromList", bookController.deleteFromList); // Endpoint untuk menghapus sebuah buku dari reading list pengguna

// Menjalankan server dan mendengarkan permintaan pada port yang ditentukan
app.listen(PORT, () => console.log(`Server started at port:${PORT}`));
