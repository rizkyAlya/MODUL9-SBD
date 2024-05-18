import React, { useState } from 'react';
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
        <div className="login-container">
          <form className="login-form">
            <h1 className="login-title">LOGIN</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username"  
                onChange={(e) => setUsername(e.target.value)}
                required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
};

export default Login;
