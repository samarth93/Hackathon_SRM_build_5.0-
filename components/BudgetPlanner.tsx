import React, { useState } from 'react';

const BudgetPlanner = () => {
  const [budget, setBudget] = useState(0);

  function handleBudgetChange (e: { target: { value: string; }; }) {
    setBudget(parseFloat(e.target.value));
  };

  return (
    <div className="max-w-xs mx-auto">
      <h2 className="text-2xl font-bold mb-4">Budget Planner</h2>
      <input
        type="number"
        placeholder="Enter your budget"
        value={budget}
        onChange={handleBudgetChange}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <p>Your budget: ${budget}</p>
    </div>
  );
};

export default BudgetPlanner;
