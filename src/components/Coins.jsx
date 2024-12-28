"use client";

import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Star, StarBorder, ShowChart, TrendingUp } from '@mui/icons-material'
import MiniLineChart from './Charts/MiniLineChart';

function Coins() {
  const [selectedTab, setSelectedTab] = useState('marketcap')
  const [timeframe, setTimeframe] = useState('24h')

  const marketCapCoins = [
    {
      name: 'Bitcoin',
      price: '$67,245.00',
      change24h: '+4.76%',
      marketcap: '1,323,456,789,123',
      priceHistory: [65000, 66000, 65500, 67000, 66500, 67245, 67500],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
    },
    {
      name: 'Ethereum',
      price: '$3,345.00',
      change24h: '+2.13%',
      marketcap: '401,234,567,890',
      priceHistory: [3200, 3250, 3300, 3280, 3310, 3330, 3345],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png'
    },
    {
      name: 'Tether',
      price: '$1.00',
      change24h: '+0.01%',
      marketcap: '102,345,678,901',
      priceHistory: [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/325/small/Tether.png'
    },
    {
      name: 'XRP',
      price: '$0.62',
      change24h: '-1.56%',
      marketcap: '67,890,123,456',
      priceHistory: [0.65, 0.64, 0.63, 0.64, 0.63, 0.62, 0.62],
      isPositive: false,
      image: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png'
    },
    {
      name: 'BNB',
      price: '$415.00',
      change24h: '+3.82%',
      marketcap: '63,456,789,012',
      priceHistory: [390, 395, 400, 408, 412, 415, 415],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png'
    },
    {
      name: 'Solana',
      price: '$184.00',
      change24h: '+2.73%',
      marketcap: '53,333,333,333',
      priceHistory: [175, 178, 180, 179, 181, 183, 184],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/4128/small/solana.png'
    }
  ];

  const topPerformers = [
    {
      name: 'Bonk',
      price: '$0.00001635',
      change24h: '+31.2%',
      marketcap: '963,234,567',
      priceHistory: [0.00001245, 0.00001325, 0.00001425, 0.00001525, 0.00001585, 0.00001612, 0.00001635],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/28600/small/bonk.jpg'
    },
    {
      name: 'Jupiter',
      price: '$1.89',
      change24h: '+28.5%',
      marketcap: '2,563,123,456',
      priceHistory: [1.47, 1.55, 1.62, 1.71, 1.78, 1.84, 1.89],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/31075/small/jup.png'
    },
    {
      name: 'WIF',
      price: '$0.315',
      change24h: '+25.4%',
      marketcap: '315,678,912',
      priceHistory: [0.251, 0.267, 0.278, 0.289, 0.298, 0.308, 0.315],
      isPositive: true,
      image: 'https://s3.coinmarketcap.com/static/img/coins/64x64/28520.png'
    },
    {
      name: 'Pyth Network',
      price: '$0.845',
      change24h: '+22.7%',
      marketcap: '845,123,456',
      priceHistory: [0.689, 0.712, 0.745, 0.778, 0.801, 0.829, 0.845],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/28495/small/pyth_network.png'
    },
    {
      name: 'Jito',
      price: '$3.92',
      change24h: '+21.3%',
      marketcap: '452,345,678',
      priceHistory: [3.23, 3.35, 3.48, 3.61, 3.74, 3.85, 3.92],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/33103/small/jito-symbol-rgb-colored.png'
    },
    {
      name: 'Render',
      price: '$4.78',
      change24h: '+19.8%',
      marketcap: '178,901,234',
      priceHistory: [3.99, 4.12, 4.28, 4.41, 4.56, 4.69, 4.78],
      isPositive: true,
      image: 'https://assets.coingecko.com/coins/images/11636/small/rndr.png'
    }
  ];

  const renderTable = (coins) => (
    <div className="overflow-x-auto -mx-1 md:mx-0">
      <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead className="bg-gray-900">
          <tr>
            <th className="py-2 px-1 md:px-4 text-white text-left text-xs md:text-base">#</th>
            <th className="py-2 px-1 md:px-4 text-white text-left text-xs md:text-base">Name</th>
            <th className="py-2 px-1 md:px-4 text-white text-right text-xs md:text-base">Price</th>
            <th className="py-2 px-1 md:px-4 text-white text-right text-xs md:text-base">24h</th>
            <th className="hidden md:table-cell py-2 px-1 md:px-4 text-white text-right text-xs md:text-base">Market Cap</th>
            <th className="hidden md:table-cell py-2 px-1 md:px-4 text-white text-center text-xs md:text-base">Graph</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index} className="border-t border-gray-800">
              <td className="py-2 px-1 md:px-4 text-white text-xs md:text-base">{index + 1}</td>
              <td className="py-2 px-1 md:px-4 text-white">
                <div className="flex items-center">
                  <img src={coin.image} alt={coin.name} className="w-4 h-4 md:w-6 md:h-6 mr-1 md:mr-2" />
                  <span className="text-xs md:text-base">{coin.name}</span>
                </div>
              </td>
              <td className="py-2 px-1 md:px-4 text-white text-right text-xs md:text-base">{coin.price}</td>
              <td className={`py-2 px-1 md:px-4 text-right text-xs md:text-base ${parseFloat(coin.change24h) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {coin.change24h}
              </td>
              <td className="hidden md:table-cell py-2 px-1 md:px-4 text-white text-right text-xs md:text-base">
                ${coin.marketcap}
              </td>
              <td className="hidden md:table-cell py-2 px-1 md:px-4 text-center">
                <div className="w-20 md:w-32 mx-auto">
                  <MiniLineChart data={coin.priceHistory} isPositive={coin.isPositive} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full">
      <div className="container mx-auto px-1 md:px-4 py-2 md:py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-open-sans">
            Market Overview
            <br />
            <span className="text-base md:text-lg text-purple-600 font-sans">
              Track top performing tokens and market leaders
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center mb-2 md:mb-6 border-b border-gray-800 text-xs md:text-base">
          <div
            className={`cursor-pointer px-1.5 md:px-4 py-2 flex items-center ${
              selectedTab === 'marketcap' 
                ? 'font-bold text-white border-b-2 border-white' 
                : 'text-gray-500'
            }`}
            onClick={() => setSelectedTab('marketcap')}
          >
            <ShowChart className="mr-1 md:mr-2 text-sm md:text-base" />
            <span className="text-xs md:text-base">Top By MarketCap</span>
          </div>
          <div
            className={`cursor-pointer px-1.5 md:px-4 py-2 ml-2 md:ml-4 flex items-center ${
              selectedTab === 'performers'
                ? 'font-bold text-white border-b-2 border-white'
                : 'text-gray-500'
            }`}
            onClick={() => setSelectedTab('performers')}
          >
            <TrendingUp className="mr-1 md:mr-2 text-sm md:text-base" />
            <span className="text-xs md:text-base">Top Performers</span>
          </div>
        </div>
        
        {renderTable(selectedTab === 'marketcap' ? marketCapCoins : topPerformers)}

        {selectedTab === 'performers' && (
          <div className="mt-2 md:mt-4 flex justify-end px-1 md:px-4">
            <select 
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="bg-gray-800 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-xs md:text-base"
            >
              <option value="6h">6h</option>
              <option value="12h">12h</option>
              <option value="24h">24h</option>
              <option value="7d">7d</option>
              <option value="1m">1m</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coins;