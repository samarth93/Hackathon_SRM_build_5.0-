import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js/auto';

Chart.register(ArcElement);

const PiiChart = () => {
  const data = {
    labels: ['Name', 'Email', 'Phone', 'Address'],
    datasets: [
      {
        data: ,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
};

export default PiiChart;