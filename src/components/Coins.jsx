"use client";

import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Star, StarBorder, MonetizationOn } from '@mui/icons-material'

function Coins() {
  const [selectedTab, setSelectedTab] = useState('coins')

  const coins = [
    { name: 'Solana', price: '$20.00', change24h: '4.76%' },
    { name: 'Solana', price: '$20.00', change24h: '-2.13%' },
    { name: 'Solana', price: '$20.00', change24h: '+0.98%' },
    { name: 'Solana', price: '$20.00', change24h: '+17.56%' },
    { name: 'Solana', price: '$20.00', change24h: '+3.82%' },
    { name: 'Solana', price: '$20.00', change24h: '-2.73%' },
  ]

  return (
    <div className="bg-gray-950 p-8 rounded-md mt-8 max-w-screen-2xl mx-auto">
  <div className="flex mb-4">
    <div
      className={`cursor-pointer px-4 py-2 ${
        selectedTab === 'coins' 
          ? 'font-bold text-white border-b-2 border-white' 
          : 'text-gray-500'
      }`}
      onClick={() => setSelectedTab('coins')}
    >
      <MonetizationOn className="mr-2" />
      Coins
    </div>
    <div
      className={`cursor-pointer px-4 py-2 ml-4 ${
        selectedTab === 'favourites'
          ? 'font-bold text-white border-b-2 border-white'
          : 'text-gray-500'
      }`}
      onClick={() => setSelectedTab('favourites')}
    >
      <Star className="mr-2" />
      Favourites
    </div>
  </div>

  <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
  <thead className="bg-gray-900">
    <tr>
      <th className="py-3 px-4 text-white text-center">Name</th>
      <th className="py-3 px-4 text-white text-center">Price</th>
      <th className="py-3 px-4 text-white text-center">24h Change (%)</th>
      <th className="py-3 px-4 text-white text-center">Price Graph (7D)</th>
    </tr>
  </thead>
  <tbody>
    {coins.map((coin, index) => (
      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
        <td className="py-3 px-32 text-white text-xl text-center">{coin.name}</td>
        <td className="py-3 px-16 text-white text-center">{coin.price}</td>
        <td className="py-3 px-16 text-center">
          <span 
            className={`px-2 py-1 rounded-lg inline-block ${
              coin.change24h.startsWith('-')
                ? 'text-red-500 bg-red-500/10'
                : 'text-green-500 bg-green-500/10'
            }`}
          >
            {coin.change24h}
          </span>
        </td>
        <td className="py-3 px-32 text-white text-center">{/* 7d Graph Placeholder */}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
  )
}

export default Coins