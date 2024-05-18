import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js/auto';
import { Chart } from 'chart.js/auto';

Chart.register(CategoryScale);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
