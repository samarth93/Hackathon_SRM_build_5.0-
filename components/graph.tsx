import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js/auto';
import { Chart } from 'chart.js/auto';

Chart.register(CategoryScale);
let a = 60;

interface GraphProps {
  style?: React.CSSProperties;
}

const LineChart: React.FC<GraphProps> = ({ style }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales Data',
        data: ,
        fill: false,
        borderColor: 'rgba(128, 0, 128, 1)', // Change border color to purple
        backgroundColor: 'rgba(169, 169, 169, 0.2)',
      },
    ],
  };

  return <Line data={data} style={style} />;
};

export default LineChart;