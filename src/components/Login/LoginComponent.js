import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import { useAuth } from '../Contaxt/AuthContext';  // Adjust the import path
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginComponent = () => {
  const { login } = useAuth(); // Get the login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleKeyboardInput = (key) => {  
    if (key === 'Backspace') {
      setPassword(password.slice(0, -1)); // Remove last character
    } else {
      setPassword(password + key); // Append clicked key
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        // Call the login function from AuthContext
        await login({ email, password });
        // Redirect to the dashboard after successful login
        navigate('/dashbord'); // Adjust this path as necessary
      } catch (error) {
        alert('Login failed. Please check your credentials.');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  const toggleKeyboard = () => {
    setKeyboardVisible(!keyboardVisible);
  };

  const keys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ';', ':', '\'', '"',
    ',', '<', '>', '.', '?', '/',
    'Space', 'Tab', 'CapsLock', 'Shift', 'Enter', 'Backspace', 'Del'
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center txtb mb-4">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label txtb">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label txtb">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <button type="button" className="btn btn-secondary" onClick={toggleKeyboard}>
            {keyboardVisible ? 'Hide' : 'Show'} Virtual Keyboard
          </button>
        </div>

        {keyboardVisible && (
          <div className="virtual-keyboard">
            {keys.map((key, index) => (
              <button
                type="button"
                key={index}
                className="btn btn-light m-1"
                onClick={() => handleKeyboardInput(key)}
              >
                {key === 'Backspace' ? <i className="fa fa-backspace"></i> : key}
              </button>
            ))}
          </div>
        )}

        <button type="submit" className="btn btn-primary mt-3">Login</button>
        <p className="mt-3 txtb">If you don't have an account, <a href="/signup" className="text-primary">sign up</a>❤️!</p>
      </form>
    </div>
  );
};

export default LoginComponent;
