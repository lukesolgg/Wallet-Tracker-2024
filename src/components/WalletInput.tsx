import React from 'react';
import { Search } from '@mui/icons-material';

interface WalletInputProps {
  walletAddress: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const WalletInput: React.FC<WalletInputProps> = ({
  walletAddress,
  onChange,
  onSubmit,
  onKeyDown
}) => (
  <>
    <div className="text-center mt-12 md:mt-24 px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-extrabold text-purple-600 mt-4 font-open-sans">
        Manage Your Wallet, Track Other Wallets
        <br />
        <span className="text-white">All In One Spot</span>
      </h1>
    </div>
    <div className="text-center">
      <p className="text-base md:text-lg mt-4 text-purple-600 px-4 md:px-0">
        Connect your wallet to get insights, or input a wallet address!
      </p>
    </div>
    <div className="mt-16 md:mt-32 flex justify-center relative px-4 md:px-0">
      <div className="relative w-full md:w-96">
        <input 
          type="text" 
          className="w-full p-3 md:p-4 pr-12 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 text-sm md:text-base"
          placeholder="Search any wallet address on sol" 
          value={walletAddress}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button 
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors duration-300"
          onClick={onSubmit}
        >
          <Search className="text-2xl" />
        </button>
      </div>
    </div>
    <div className="text-center mb-24 md:mb-32">
      <p className="mt-16 md:mt-32 text-gray-600 text-sm md:text-base px-4 md:px-0">
        Coded for educational purposes to train my NextJS, Rust, Anchor & TailwindCSS skills
      </p>
    </div>
  </>
);

export default WalletInput;