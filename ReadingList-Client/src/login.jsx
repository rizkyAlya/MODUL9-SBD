import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/userAction'; 
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { success, data } = await loginUser(username, password);
  
      if (success && data) {
        // Berhasil login
        console.log('Login success!');
        alert('Login success');
        // Redirect ke halaman beranda atau lakukan tindakan yang sesuai
      } else {
        alert('Username/password incorrect');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to login');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">LOGIN</h2>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
        <button type="submit" className="button" >Submit</button>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signUp">Sign up here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
