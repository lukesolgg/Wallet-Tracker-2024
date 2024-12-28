import React from 'react';
import TransactionTable from './TransactionTable';

interface TransactionHistoryProps {
  transactions: Array<any>;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => (
  <div className="w-full p-4 md:p-6 rounded-lg">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white font-open-sans">
      Transaction History
      <br />
      <span className="text-base md:text-lg text-purple-600 font-sans">
        Recent wallet activity and transfers
      </span>
    </h2>
    
    <div className="mt-8">
      <div className="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur-sm">
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  </div>
);

export default TransactionHistory;