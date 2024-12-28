import React from 'react';

const SolanaStats: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">SOL Supply</h3>
          <p className="text-2xl font-bold text-white">555.56M</p>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Current Epoch</h3>
          <p className="text-2xl font-bold text-white">239</p>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Network Transactions</h3>
          <p className="text-2xl font-bold text-white">254.2B</p>
        </div>
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Total Staked SOL</h3>
          <p className="text-2xl font-bold text-white">372.8M</p>
        </div>
      </div>
    </div>
  );
};

export default SolanaStats;