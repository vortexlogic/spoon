import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (error) {
      // Handle login error (e.g., display an error message)
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login to the Matrix Training Program</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit