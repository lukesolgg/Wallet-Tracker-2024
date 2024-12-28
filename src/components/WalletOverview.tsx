import React from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface WalletOverviewProps {
  totalBalance: string;
  totalChange: string;
  walletAddress: string;
  showFullAddress: boolean;
  handleToggleAddress: () => void;
}

const StatCard: React.FC<{ title: string; value: string; subValue?: string }> = ({
  title,
  value,
  subValue
}) => (
  <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
    <h3 className="text-gray-400 text-sm md:text-base mb-2">{title}</h3>
    <p className="text-white text-xl md:text-2xl font-bold">{value}</p>
    {subValue && (
      <p className="text-purple-500 text-sm md:text-base mt-1">{subValue}</p>
    )}
  </div>
);

const WalletOverview: React.FC<WalletOverviewProps> = ({
  totalBalance,
  totalChange,
  walletAddress,
  showFullAddress,
  handleToggleAddress
}) => (
  <div className="w-full p-4 md:p-6 rounded-lg">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white font-open-sans">
      Wallet Overview
      <br />
      <span className="text-base md:text-lg text-purple-600 font-sans">
        Track your wallet's performance and activity
      </span>
    </h2>
    
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatCard
        title="Total Balance"
        value={`$${totalBalance}`}
        subValue={`${parseFloat(totalChange) >= 0 ? '+' : ''}${totalChange}% (24h)`}
      />
      
      <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-gray-400 text-sm md:text-base mb-2">Wallet Address</h3>
        <div className="flex items-center justify-between">
          <p className="text-white text-sm md:text-base font-mono">
            {showFullAddress ? walletAddress : `${walletAddress.slice(0, 8)}...${walletAddress.slice(-8)}`}
          </p>
          <IconButton 
            onClick={handleToggleAddress}
            className="text-gray-400 hover:text-purple-500 transition-colors duration-200"
          >
            {showFullAddress ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </div>
      </div>
    </div>
  </div>
);

export default WalletOverview;