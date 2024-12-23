export const lineChartOptions = {
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { display: false }
      },
      y: {
        ticks: { 
          color: 'white', 
          beginAtZero: true, 
          max: 4500,
          callback: value => `$${value}`
        },
        grid: { display: false }
      }
    },
    plugins: { legend: { display: false } }
  };
  
  export const pieChartOptions = {
    maintainAspectRatio: false
  };