const Book = require("../models/bookSchema");// Mengimpor model User yang akan digunakan untuk operasi database
const User = require("../models/userSchema");

async function addBook(req, res) {
    const { image, title, author, synopsis } = req.body;

    try {
        // Cek apakah buku sudah ada berdasarkan judul
        let existingBook = await Book.findOne({ title });

        // Jika buku sudah ada, kirim pesan bahwa buku sudah ada
        if (existingBook) {
        return res.status(400).json({ message: 'Buku sudah ada dalam database' });
        }

        // Jika buku belum ada, tambahkan buku baru
        const newBook = new Book({ image, title, author, synopsis });
        await newBook.save();

        res.status(201).json({ message: 'Buku berhasil ditambahkan', data: newBook });
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan buku', error: error.message });
    }
    }

// Fungsi untuk mendapatkan data semua buku
async function getAllBooks(req, res) {
    try {
        const books = await Book.find();
        res.status(200).json({ message: 'Berhasil mendapatkan semua buku', data: books });
      } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mengambil buku', error: error.message });
      }
}

async function addToList(req, res) {
    const { userId, bookId } = req.body;

    try {
        // Temukan pengguna berdasarkan userId
        const user = await User.findById(userId);

        // Jika pengguna tidak ditemukan
        if (!user) {
        return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        // Temukan buku berdasarkan bookId
        const book = await Book.findById(bookId);

        // Jika buku tidak ditemukan
        if (!book) {
        return res.status(404).json({ message: 'Buku tidak ditemukan' });
        }

        // Tambahkan buku ke reading list pengguna (jika belum ada)
        if (!user.readingList.includes(bookId)) {
            user.readingList.push(bookId);
            await user.save();
            res.status(200).json({ message: 'Buku berhasil ditambahkan ke reading list', data: user });
        } else {
            res.status(400).json({ message: 'Buku sudah ada di reading list' });
        }
    } catch (error) {
        console.error('Error adding book to reading list:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan buku ke reading list', error: error.message });
    }
}

async function deleteFromList(req, res) {
    const { userId, bookId } = req.body;

    try {
        // Temukan pengguna berdasarkan userId
        const user = await User.findById(userId);

        // Jika pengguna tidak ditemukan
        if (!user) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        // Periksa apakah buku ada dalam readingList
        const bookIndex = user.readingList.indexOf(bookId);
        if (bookIndex !== -1) {
            // Hapus buku dari readingList
            user.readingList.splice(bookIndex, 1);
            await user.save();
            return res.status(200).json({ message: 'Buku berhasil dihapus dari reading list', data: user });
        } else {
            return res.status(400).json({ message: 'Buku tidak ditemukan dalam reading list' });
        }
    } catch (error) {
        console.error('Error deleting book from reading list:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus buku dari reading list', error: error.message });
    }
}

module.exports = {
    addBook,
    getAllBooks,
    addToList,
    deleteFromList
}