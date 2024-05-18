import React, { useState } from 'react';
import { addUser } from '../actions/userAction'; // Mengimpor fungsi signUpUser dari file actions
import './signUp.css'; 

const SignUp = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data sign up ke backend menggunakan fungsi signUpUser
      const userData = {
        email: newEmail,
        username: newUsername,
        password: newPassword
      };
      
      const response = await addUser(userData);

      if (response.success) {
        console.log('Sign up successful:', response.data);
        // Redirect ke halaman beranda setelah sign up berhasil
        //history.push('/'); 
        alert("sign up success");
      } else {
        setError('Failed to sign up');
        alert("failed to login");
      }


    } catch (error) {
      console.error('Sign up failed:', error);
      setError('Failed');
      alert("failed to login");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Sign Up</h2>
        <div className="input-group">
          <label htmlFor="newEmail">Email</label>
          <input
            type="email"
            id="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="newUsername">Username</label>
          <input
            type="text"
            id="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="newPassword">Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-button">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
