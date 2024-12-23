import React from 'react';
import PieChart from './Charts/PieChart';
import { Asset } from '../types/asset';

interface AccountSummaryProps {
  assetData: Asset[];
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ assetData }) => (
  <div className="mt-4 max-w-screen-lg w-full p-4 rounded-md">
    <h2 className="text-5xl font-extrabold text-white font-open-sans">
      Account Overview
      <br />
      <span className="text-lg text-purple-600 font-sans">
        Visual representation of your portfolio distribution
      </span>
    </h2>
    <PieChart assetData={assetData} />
  </div>
);

export default AccountSummary;