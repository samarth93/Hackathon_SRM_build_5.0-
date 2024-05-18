import React, { useState } from 'react';
import axios from 'axios';

const FlexiblePayments = () => {
  const [installments, setInstallments] = useState('');
  const [message, setMessage] = useState('');

  const handleInstallmentsChange = (e) => {
    setInstallments(e.target.value);
  };

  const handleFlexiblePayment = async () => {
    try {
      await axios.post('/api/flexible-payment', { installments });
      setMessage('Flexible payment scheduled.');
    } catch (error) {
      setMessage('Failed to schedule flexible payment. Please try again.');
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Flexible Payment Options</h2>
      <input
        type="number"
        placeholder="Enter number of installments"
        value={installments}
        onChange={handleInstallmentsChange}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <button onClick={handleFlexiblePayment} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Schedule Payment
      </button>
      <p className="text-red-500 mt-2">{message}</p>
    </div>
  );
};

export default FlexiblePayments;
