import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
import moment from 'moment';
import { INITIAL_ASSETS } from '../types/assetData';
import WalletInput from './WalletInput';
import WalletOverview from './WalletOverview';
import AccountSummary from './AccountSummary';
import PortfolioRecap from './PortfolioRecap';
import AssetBreakdown from './AssetBreakdown';
import Coins from './Coins';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

interface MainProps {
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

interface Asset {
  name: string;
  ticker: string;
  price: number;
  amount: number;
  change: string;
  value: string;
  image: string;
}

const Main: React.FC<MainProps> = ({ isSubmitted, setIsSubmitted }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [showFullAddress, setShowFullAddress] = useState(false);
  const [assets, setAssets] = useState<Asset[]>(INITIAL_ASSETS);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsSubmitted(true);
    }
  };

  const handleToggleAddress = () => {
    setShowFullAddress(!showFullAddress);
  };

  const assetData = assets.map(asset => ({
    ...asset,
    value: (asset.amount * asset.price).toFixed(2)
  }));

  const totalBalance = assetData.reduce((acc, asset) => acc + parseFloat(asset.value), 0).toFixed(2);
  const totalChange = assetData.reduce((acc, asset) => acc + parseFloat(asset.change), 0).toFixed(2);

  const transactions = [
    { date: moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Sent' },
    { date: moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Received' },
    { date: moment().subtract(3, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Sent' },
    { date: moment().subtract(4, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Received' },
    { date: moment().subtract(5, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Sent' }
  ];

  const handleBackAndScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSubmitted(false);
  };

  return (
    <div className="flex-grow flex items-center justify-center pt-16 pb-16 bg-gradient-radial from-purple-50/[0.05] via-purple-900/[0.02] to-gray-950">
      <div className="bg-transparent p-8 flex flex-col items-center justify-center max-w-screen-xl w-full h-full text-center">
        {!isSubmitted ? (
          <>
            <WalletInput
              walletAddress={walletAddress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWalletAddress(e.target.value)}
              onSubmit={() => setIsSubmitted(true)}
              onKeyDown={handleKeyPress}
            />
            <Coins />
          </>
        ) : (
          <>
            <WalletOverview 
              totalBalance={totalBalance}
              totalChange={totalChange}
              walletAddress={walletAddress}
              showFullAddress={showFullAddress}
              handleToggleAddress={handleToggleAddress}
              transactions={transactions}
            />

            <div className="w-full max-w-screen-lg border-t border-gray-600 my-8"></div>

            <AccountSummary assetData={assetData} />

            <div className="w-full max-w-screen-lg border-t border-gray-600 my-8"></div>

            <PortfolioRecap />

            <div className="w-full max-w-screen-lg border-t border-gray-600 my-8"></div>

            <AssetBreakdown assetData={assetData} />

            <button 
              className="mt-8 p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onClick={handleBackAndScroll}
            >
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;