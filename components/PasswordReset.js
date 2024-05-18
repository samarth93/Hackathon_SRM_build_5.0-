import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async () => {
    try {
      await axios.post('/api/reset-password', { email });
      setMessage('Password reset instructions sent to your email.');
    } catch (error) {
      setMessage('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Reset Password
      </button>
      <p className="text-red-500 mt-2">{message}</p>
    </div>
  );
};

export default PasswordReset;
