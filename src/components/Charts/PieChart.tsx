import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Asset } from '../../types/asset';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  assetData: Asset[];
}

const PieChart: React.FC<PieChartProps> = ({ assetData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'white',
          padding: 20,
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const asset = assetData[context.dataIndex];
            return [
              `Balance: $${asset.value}`,
              `Quantity: ${asset.amount}`,
              `Price: $${asset.price.toFixed(2)}`
            ];
          }
        },
        padding: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }
    }
  };

  const GRADIENT_PALETTE = [
    'rgba(229, 231, 235, 0.9)',  // Light grey
    'rgba(209, 196, 233, 0.9)',  // Very light purple
    'rgba(179, 157, 219, 0.9)',  // Light purple
    'rgba(149, 117, 205, 0.9)',  // Medium purple
    'rgba(126, 87, 194, 0.9)',   // Dark purple
    'rgba(94, 53, 177, 0.9)',    // Very dark purple
  ];

  const HOVER_GRADIENT_PALETTE = [
    'rgba(229, 231, 235, 1)',
    'rgba(209, 196, 233, 1)',
    'rgba(179, 157, 219, 1)',
    'rgba(149, 117, 205, 1)',
    'rgba(126, 87, 194, 1)',
    'rgba(94, 53, 177, 1)',
  ];

  const data = {
    labels: assetData.map(asset => asset.ticker),
    datasets: [{
      data: assetData.map(asset => parseFloat(asset.value)),
      backgroundColor: GRADIENT_PALETTE,
      hoverBackgroundColor: HOVER_GRADIENT_PALETTE,
      borderWidth: 2,
      borderColor: 'rgba(0, 0, 0, 0.5)',
      hoverOffset: 10,
    }]
  };

  return (
    <div className="mt-4 w-full h-96 flex justify-center items-center filter drop-shadow-lg">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;