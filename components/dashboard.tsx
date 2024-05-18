import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Finance Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="summary">
          <h2>Summary</h2>
          {/* Add summary content here */}
        </section>
        <section className="expenses">
          <h2>Expenses</h2>
          {/* Add expenses content here */}
        </section>
        <section className="budget">
          <h2>Budget</h2>
          {/* Add budget content here */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
