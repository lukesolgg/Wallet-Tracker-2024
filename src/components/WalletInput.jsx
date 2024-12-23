import React from 'react';
import { Search } from '@mui/icons-material';

const WalletInput = ({ walletAddress, onChange, onSubmit, onKeyDown }) => (
  <>
    <div className="text-center mt-24">
      <h1 className="text-5xl font-extrabold text-purple-600 mt-4 font-open-sans">
        Manage Your Wallet, Track Other Wallets
        <br />
        <span className="text-white">All In One Spot</span>
      </h1>
    </div>
    <p className="text-lg mt-4 text-purple-600">Connect your wallet to get insights, or input a wallet address!</p>
    <div className="mt-32 flex justify-center relative">
      <input 
        type="text" 
        className="w-96 p-4 pr-12 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
        placeholder="Search any wallet address on sol" 
        value={walletAddress}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button 
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors duration-300"
        onClick={onSubmit}
      >
        <Search />
      </button>
    </div>
    <p className="mt-32 text-gray-600">Coded for educational purposes to train my NextJS, Rust, Anchor & TailwindCSS skills</p>
  </>
);

export default WalletInput;