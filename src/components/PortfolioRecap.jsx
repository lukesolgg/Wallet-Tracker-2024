import React from 'react';
import LineChart from './Charts/LineChart';

const PortfolioRecap = () => (
  <div className="mt-4 max-w-screen-lg w-full p-4 rounded-md">
    <h2 className="text-5xl font-extrabold text-white font-open-sans">
      Your 12 Month Recap
      <br />
      <span className="text-lg text-purple-600 font-sans">Track your portfolio performance over time</span>
    </h2>
    <LineChart />
  </div>
);

export default PortfolioRecap;