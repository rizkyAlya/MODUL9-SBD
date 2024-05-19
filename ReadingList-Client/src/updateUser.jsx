import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { upUser } from '../actions/userAction'; 
import './updateUser.css'; 

const UpUser = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await upUser(username, newPassword);
  
      if (response.success) {
        alert('Update success');
        navigate('/book');
      } else {
        alert('Failed to Update');
      }
    } catch (error) {
      alert('server error');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">UPDATE</h2>
        <div className="form-group">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username"  
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
        </div>
          <label htmlFor="password">New Password</label>
          <input 
            type="text" 
            id="newPassword" 
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required />
        </div>
        <button type="submit" className="button" >Update</button>
      </form>
    </div>
  );
};

export default UpUser;
