import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialAdvice = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await axios.get('/api/financial-advice');
        setAdvice(response.data);
      } catch (error) {
        console.error('Error fetching financial advice:', error);
      }
    };

    fetchAdvice();
  }, []);

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Financial Advice</h2>
      <p>{advice}</p>
    </div>
  );
};

export default FinancialAdvice;
