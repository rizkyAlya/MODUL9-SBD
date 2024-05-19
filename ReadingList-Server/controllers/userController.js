const User = require("../models/userSchema");// Mengimpor model User yang akan digunakan untuk operasi database

async function loginUser(req, res) {
    const { username, password } = req.body;

    try {
        // Cari pengguna berdasarkan username
        const user = await User.findOne({ username });

        // Jika pengguna tidak ditemukan
        if (!user) {
        return res.status(404).json({ message: 'Username tidak ditemukan' });
        }

        // Verifikasi password
        if (user.password !== password) {
        return res.status(401).json({ message: 'Password salah' });
        }

        // Jika login berhasil, kirim respons sukses
        res.status(200).json({ message: 'Login berhasil', data: user });
    } catch (error) {
        // Tangani kesalahan server
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat login', error: error.message });
    }
}

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

// Fungsi untuk mendapatkan data semua pengguna
async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({ message: "Berhasil mendapatkan semua data pengguna", data: users });
    }
    catch (err) {
        // Mengirim respons kesalahan jika terjadi kesalahan saat mengambil data pengguna
        res.status(500).send(err);
    }
}

async function updateUser(req, res) {
    const { username } = req.params; 
    const { password } = req.body; 

    try {
        const user = await User.findOneAndUpdate({ username }, { password }, { new: true })

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

async function deleteUser(req, res) {
    const { username } = req.params; 

    try {
        const user = await User.findOneAndDelete({ username }); 

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
    loginUser,
    addUser,
    getAllUsers,
    updateUser,
    //deleteUser
}