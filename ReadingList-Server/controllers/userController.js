const User = require("../models/userSchema");// Mengimpor model User yang akan digunakan untuk operasi database

// Fungsi untuk menambahkan pengguna baru
async function addUser(req, res) {
    const { email, username, password } = req.body; // Mendapatkan data pengguna dari request
    const user = new User({ email, username, password }); // Membuat objek pengguna baru berdasarkan data yang diterima

    try {
        await user.save(); // Menyimpan pengguna baru ke dalam database

        // Mengirim respons berhasil dengan data pengguna yang ditambahkan
        res.status(201).json({ message: "Data pengguna berhasil ditambahkan", data: user });
    } 
    catch (err) {
        // Mengirim respons kesalahan jika terjadi kesalahan saat menambahkan pengguna
        res.status(500).send(err);
    }
}

// Fungsi untuk memperbarui pengguna berdasarkan NPM
async function updateUser(req, res) {
    const { username } = req.params; // Mendapatkan NPM pengguna yang akan diperbarui dari parameter URL
    const { password } = req.body; // Mendapatkan data pengguna yang akan diperbarui dari badan permintaan

    try {
        // Mencari pengguna berdasarkan NPM dan memperbarui data pengguna
        const user = await User.findOneAndUpdate({ username }, { password }, { new: true });

        // Memeriksa apakah pengguna ditemukan dan diperbarui
        if (user) {
            res.status(200).json({ message: "Berhasil memperbarui kata sandi pengguna", data: user });
        } else {
            res.status(404).json({ message: "Gagal memperbarui kata sandi pengguna" });
        }
    } catch (err) {
        // Mengirim respons kesalahan jika terjadi kesalahan saat memperbarui pengguna
        res.status(500).send(err);
    }
}

// Fungsi untuk menghapus pengguna berdasarkan NPM
async function deleteUser(req, res) {
    const { username } = req.params; // Mendapatkan NPM pengguna yang akan dihapus dari parameter URL

    try {
        const user = await User.findOneAndDelete({ username }); // Mencari pengguna berdasarkan NPM dan menghapusnya

        // Memeriksa apakah pengguna ditemukan dan dihapus
        if (user) {
            res.status(200).json({ message: "Data pengguna berhasil dihapus", data: user });
        }
        else {
            res.status(404).json({ messaage: "Data tidak ditemukan"});
        }
    }
    catch (err) {
        // Mengirim respons kesalahan jika terjadi kesalahan saat menghapus pengguna
        res.status(500).send(err);
    }
}

// Mengekspor semua fungsi agar dapat digunakan di file lain
module.exports = {
    addUser,
    updateUser,
    deleteUser
}