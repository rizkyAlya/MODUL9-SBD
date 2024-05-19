# BOOK VAULT

BOOK VAULT adalah aplikasi web sederhana yang memungkinkan pengguna untuk menyimpan dan mengelola buku-buku yang ingin mereka baca dalam sebuah daftar bacaan (reading list).

## Fitur Aplikasi

Aplikasi ini memiliki fitur CRUD (Create, Read, Update, Delete) yang memungkinkan pengguna untuk:

1. **Create**:
   - **Sign Up**: Membuat akun baru untuk pengguna.
   - **Menambahkan Buku**: Menambahkan buku baru ke dalam reading list.

2. **Read**:
   - **Mendapatkan Data Pengguna**: Mengambil data semua pengguna untuk memastikan bahwa akun yang dimasukkan oleh pengguna valid.
   - **Mendapatkan Data Buku**: Mengambil data semua buku untuk ditampilkan di beranda website.

3. **Update**:
   - **Memperbarui Password**: Memperbarui password dari pengguna (fitur ini belum berhasil diimplementasikan).

4. **Delete**:
   - **Menghapus Buku**: Menghapus buku dari reading list pengguna.

## Teknologi yang Digunakan

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios untuk komunikasi antara frontend dan backend

## Cara Menjalankan Aplikasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/rizkyAlya/MODUL9-SBD.git
   cd book-vault
2. **Instalasi Dependencies**
   ```bash
   npm install
4. **Menjalankan Backend Server**
   ```bash
   node server.js
6. **Menjalankan Frontend**
    ```bash
    npm run dev
