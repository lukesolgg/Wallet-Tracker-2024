import React from 'react';
import { IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import TransactionTable from './TransactionTable';

const WalletOverview = ({ totalBalance, totalChange, walletAddress, showFullAddress, handleToggleAddress, transactions }) => (
  <div className="mt-8 w-full max-w-screen-lg p-4 rounded-md">
    <h2 className="text-5xl font-extrabold text-white font-open-sans">
      Wallet Overview
      <br />
      <span className="text-lg text-purple-600 font-sans">Track your wallet's performance and activity</span>
    </h2>
    <div className="mt-4 flex justify-between items-center">
      <div className="text-left text-white w-1/2">
        <h1 className="text-lg mt-4">Wallet Balance: ${totalBalance}</h1>
        <p className="text-lg mt-2">24h Change: {totalChange}%</p>
        <p className="text-lg mt-2 flex items-center">
          Wallet Address: {showFullAddress ? walletAddress : `${walletAddress.slice(0, 8)}...`}
          <IconButton onClick={handleToggleAddress} color="inherit">
            {showFullAddress ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </p>
        <p className="text-lg mt-2">Created: 117 days ago 4 hours</p>
      </div>
      <div className="text-left text-white w-1/2">
        <h2 className="text-2xl font-bold text-white font-open-sans">
          Recent Transactions
          <br />
          <span className="text-lg text-purple-600 font-sans">Latest activity in your wallet</span>
        </h2>
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  </div>
);

export default WalletOverview;