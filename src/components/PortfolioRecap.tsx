import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive = true }) => (
  <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
    <p className="text-gray-400 text-sm">{title}</p>
    <p className="text-white text-xl font-bold">{value}</p>
    <p className={`${isPositive ? 'text-green-500' : 'text-red-500'} text-sm`}>
      {change}
    </p>
  </div>
);

const PortfolioRecap: React.FC = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Portfolio Value',
      data: [12000, 19000, 15000, 25000, 23000, 28000],
      borderColor: 'rgb(147, 51, 234)',
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: false 
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        padding: 12,
        displayColors: false
      }
    },
    scales: {
      y: {
        type: 'linear' as const,
        beginAtZero: true,
        grid: { 
          color: 'rgba(255, 255, 255, 0.1)' 
        },
        ticks: {
          color: 'white',
          callback: function(tickValue: number | string) {
            return `$${Number(tickValue).toLocaleString()}`;
          }
        }
      },
      x: {
        type: 'category' as const,
        grid: { 
          color: 'rgba(255, 255, 255, 0.1)' 
        },
        ticks: { 
          color: 'white' 
        }
      }
    }
  };

  return (
    <div className="w-full p-4 md:p-6 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white font-open-sans">
        Portfolio Recap
        <br />
        <span className="text-base md:text-lg text-purple-600 font-sans">
          Track your portfolio's performance over time
        </span>
      </h2>

      <div className="mt-6 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MetricCard 
            title="Total Value" 
            value="$28,000" 
            change="+133.33% (24h)" 
          />
          <MetricCard 
            title="Best Performer" 
            value="GIGA" 
            change="+245.67% (24h)" 
          />
          <MetricCard 
            title="Worst Performer" 
            value="ME" 
            change="-12.34% (24h)" 
            isPositive={false} 
          />
        </div>

        <div className="h-64 md:h-96">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioRecap;