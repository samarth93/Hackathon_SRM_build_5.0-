import React from 'react';
import Graph from "@/components/graph";

const ChartPage = () => {
  const containerStyle = {
    width: '50%',
    height: '400px',
    border: '3px solid #ccc', // Add border style here
    padding: '20px', // Optional: Add padding for spacing
    borderRadius: '10px',
  };

  return (
    <div className='p-10'>
    <div style={containerStyle}>
      <h1>Line Chart Example</h1>
      <Graph style={{ width: '100%', height: '100%' }} />
    </div>
    </div>
  );
};

export default ChartPage;