import React from 'react';
import { Line } from 'react-chartjs-2';
import { lineChartOptions } from '../../config/chartConfig';

const LineChart = () => {
  const generateRandomValues = () => {
    return Array.from({ length: 12 }, () => 
      Math.floor(Math.random() * (4500 - 1500 + 1)) + 1500
    );
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Balance',
      data: generateRandomValues(),
      borderColor: 'white',
      backgroundColor: 'white',
      pointBackgroundColor: 'white',
      pointBorderColor: 'white',
      fill: false,
      tension: 0.1
    }]
  };

  return (
    <div className="mt-4 w-full h-96 flex justify-center items-center">
      <Line data={data} options={lineChartOptions} />
    </div>
  );
};

export default LineChart;