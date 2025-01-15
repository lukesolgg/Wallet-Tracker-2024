import React, { useState } from 'react';
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
import WalletInput from './WalletInput';
import WalletOverview from './WalletOverview';
import AccountSummary from './AccountSummary';
import PortfolioRecap from './PortfolioRecap';
import AssetBreakdown from './AssetBreakdown';
import Coins from './Coins';
import TransactionHistory from './TransactionHistory';
import SolanaStats from './SolanaStats';
import GetMoreInfo from './GetMoreInfo';
export const INITIAL_ASSETS: Asset[] = [
  { 
    name: 'Solana', 
    ticker: 'SOL',
    amount: 4,
    image: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
    price: 198.45,
    change: '8.32',
    value: '793.80'
  },
  { 
    name: 'BONK', 
    ticker: 'BONK',
    amount: 15364000,
    image: 'https://assets.coingecko.com/coins/images/28600/small/bonk.jpg',
    price: 0.00001635,
    change: '31.2',
    value: '251.20'
  },
  { 
    name: 'Jito', 
    ticker: 'JITO',
    amount: 25.5,
    image: 'https://assets.coingecko.com/coins/images/33103/small/jito.png',
    price: 3.92,
    change: '21.3',
    value: '99.96'
  },
  { 
    name: 'Jupiter', 
    ticker: 'JUP',
    amount: 340,
    image: 'https://assets.coingecko.com/coins/images/34169/small/jup.png',
    price: 1.24,
    change: '15.4',
    value: '421.60'
  }
];

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

export interface Asset {
  name: string;
  ticker: string;
  amount: number;
  image: string;
  price: number;
  change: string;
  value: string;
}

const Main: React.FC<MainProps> = ({ isSubmitted, setIsSubmitted }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [showFullAddress, setShowFullAddress] = useState(false);
  const [assets] = useState(INITIAL_ASSETS);

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

  const totalBalance = assetData
    .reduce((acc, asset) => acc + parseFloat(asset.value), 0)
    .toFixed(2);
    
  const totalChange = assetData
    .reduce((acc, asset) => acc + parseFloat(asset.change), 0)
    .toFixed(2);

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
    <div className="min-h-screen bg-gradient-radial from-purple-50/[0.05] via-purple-900/[0.02] to-gray-950">
  <div className="container mx-auto px-4 py-16">
    {!isSubmitted ? (
      <>
        <WalletInput
          walletAddress={walletAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWalletAddress(e.target.value)}
          onSubmit={() => setIsSubmitted(true)}
          onKeyDown={handleKeyPress}
        />
        <div className="text-center">
          <SolanaStats />
          <Coins />
          <GetMoreInfo />
        </div>
      </>
    ) : (
      <div className="space-y-8">
        <div className="text-center">
          <WalletOverview
            totalBalance={totalBalance}
            totalChange={totalChange}
            walletAddress={walletAddress}
            showFullAddress={showFullAddress}
            handleToggleAddress={handleToggleAddress}
          />
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="text-center">
          <TransactionHistory transactions={transactions} />
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="text-center">
          <AccountSummary assetData={assetData} />
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="text-center">
          <PortfolioRecap />
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="text-center">
          <AssetBreakdown assetData={assetData} />
        </div>

        <div className="flex justify-center">
          <button 
            className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-colors duration-200"
            onClick={handleBackAndScroll}
          >
            Back to Search
          </button>
        </div>
      </div>
    )}
  </div>
</div>
  );
};

export default Main;