import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = async () => {
    try {
      await axios.post('/api/pay', { amount });
      setMessage('Payment successful.');
    } catch (error) {
      setMessage('Payment failed. Please try again.');
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
      <input
        type="number"
        placeholder="Enter payment amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Pay Now
      </button>
      <p className="text-red-500 mt-2">{message}</p>
    </div>
  );
};

export default Payment;
