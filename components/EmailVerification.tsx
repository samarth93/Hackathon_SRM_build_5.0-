import React, { useState } from 'react';
import axios from 'axios';

const EmailVerification = () => {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async () => {
    try {
      await axios.post('/api/verify-email', { token });
      setMessage('Email verification successful.');
    } catch (error) {
      setMessage('Failed to verify email. Please try again.');
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
      <input
        type="text"
        placeholder="Enter verification token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <button onClick={handleVerify} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Verify Email
      </button>
      <p className="text-red-500 mt-2">{message}</p>
    </div>
  );
};

export default EmailVerification;
