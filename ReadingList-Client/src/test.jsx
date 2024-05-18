import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Sesuaikan dengan URL API Anda

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/getAllUsers`);
        console.log("Response from Backend:", response.data);
        setUsers(response.data.data); // Set state users dengan data dari response
      } catch (error) {
        alert("failed fetch user");
      }
    };

    fetchUsers();
  }, []); // Panggil useEffect hanya sekali saat komponen pertama kali dimuat

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>Email:</strong> {user.email}, <strong>Username:</strong> {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
