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
  ]

  const renderTable = (coins) => (
    <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
      <thead className="bg-gray-900">
        <tr>
          <th className="py-3 px-4 text-white text-center">#</th>
          <th className="py-3 px-4 text-white text-center">Name</th>
          <th className="py-3 px-4 text-white text-center">Price</th>
          <th className="py-3 px-4 text-white text-center">24h Change (%)</th>
          <th className="py-3 px-4 text-white text-center">Market Cap</th>
          <th className="py-3 px-4 text-white text-center">Price Graph (7D)</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <tr key={index} className="border-t border-gray-800">
            <td className="py-3 px-4 text-white text-center">{index + 1}</td>
            <td className="py-3 px-4 text-white">
              <div className="flex items-center justify-center">
                <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                {coin.name}
              </div>
            </td>
            <td className="py-3 px-16 text-white text-center">{coin.price}</td>
            <td className="py-3 px-16 text-white text-center">{coin.change24h}</td>
            <td className="py-3 px-16 text-white text-center">${coin.marketcap}</td>
            <td className="py-3 px-16 text-white text-center">
              <MiniLineChart data={coin.priceHistory} isPositive={coin.isPositive} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className=" pt-24 bg-gradient-radial from-purple-50/[0.05] via-purple-900/[0.02] to-gray-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6 border-b border-gray-800">
        <div
          className={`cursor-pointer px-4 py-2 flex items-center ${
            selectedTab === 'marketcap' 
              ? 'font-bold text-white border-b-2 border-white' 
              : 'text-gray-500'
          }`}
          onClick={() => setSelectedTab('marketcap')}
        >
          <ShowChart className="mr-2" />
          Top By MarketCap
        </div>
        <div
          className={`cursor-pointer px-4 py-2 ml-4 flex items-center ${
            selectedTab === 'performers'
              ? 'font-bold text-white border-b-2 border-white'
              : 'text-gray-500'
          }`}
          onClick={() => setSelectedTab('performers')}
        >
          <TrendingUp className="mr-2" />
          Top Performers
        </div>
      </div>
      </div>
      {selectedTab === 'marketcap' ? renderTable(marketCapCoins) : renderTable(topPerformers)}

      {selectedTab === 'performers' && (
        <div className="mt-4 flex justify-end">
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="6h">6 Hours</option>
            <option value="12h">12 Hours</option>
            <option value="24h">24 Hours</option>
            <option value="7d">7 Days</option>
            <option value="1m">1 Month</option>
          </select>
        </div>
      )}
    </div>
  )
}

export default Coins