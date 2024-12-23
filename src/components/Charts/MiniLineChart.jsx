import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const MiniLineChart = ({ data, isPositive }) => {
  const chartData = {
    labels: ['', '', '', '', '', '', ''], // 7 empty labels for 7 days
    datasets: [
      {
        data: data,
        borderColor: isPositive ? '#22c55e' : '#ef4444',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="h-12 w-48">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MiniLineChart;