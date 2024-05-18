import React, { useState, useEffect } from 'react';
import axios from 'axios';
import expenses from '@/public/expenses/expenses';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('/api/expenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
      <ul>
        {/* {expenses.map((expense) => (
          <li key={expense.id} className="border-b py-2">
            {expenses.description}: ${expenses.amount}
          </li>
        ))} */}

        {/* {Object.values(expenses).map((expense)=>{
          <li>
            {expense.amount}
          </li>
        })} */}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
