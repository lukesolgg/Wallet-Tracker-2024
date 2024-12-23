"use client";

import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import { Pie, Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

function Main() {
  const [walletAddress, setWalletAddress] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTracking, setIsTracking] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const handleBack = () => {
    setIsSubmitted(false)
    setWalletAddress('')
  }

  const handleToggleTracking = () => {
    setIsTracking(!isTracking)
  }

  const assets = [
    { name: 'SOL', amount: 4, price: 186.25, change: '0.98%' },
    { name: 'GIGA', amount: 15364, price: 0.0509, change: '-0.19%' },
    { name: 'LOCKIN', amount: 2499, price: 0.0271, change: '-2.62%' },
    { name: 'ME', amount: 340, price: 3.10, change: '-0.09%' },
    { name: 'POPCAT', amount: 280, price: 0.79, change: '7.87%' }
  ]

  const assetData = assets.map(asset => ({
    ...asset,
    value: (asset.amount * asset.price).toFixed(2)
  }))

  const totalBalance = assetData.reduce((acc, asset) => acc + parseFloat(asset.value), 0).toFixed(2)
  const totalChange = assetData.reduce((acc, asset) => acc + parseFloat(asset.change), 0).toFixed(2)

  const pieData = {
    labels: assetData.map(asset => asset.name),
    datasets: [
      {
        data: assetData.map(asset => asset.value),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
      }
    ]
  }

  const generateRandomValues = () => {
    const values = []
    for (let i = 0; i < 12; i++) {
      values.push(Math.floor(Math.random() * (4500 - 1500 + 1)) + 1500)
    }
    return values
  }

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Balance',
        data: generateRandomValues(),
        borderColor: 'white',
        backgroundColor: 'white',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
        fill: false,
        tension: 0.1
      }
    ]
  }

  const lineOptions = {
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { display: false }
      },
      y: {
        ticks: { 
          color: 'white', 
          beginAtZero: true, 
          max: 4500,
          callback: function(value) {
            return '$' + value
          }
        },
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }

  return (
    <div className="flex-grow flex items-center justify-center pt-16 pb-16">
      <div className="bg-black bg-opacity-80 p-8 flex flex-col items-center justify-center max-w-screen-xl w-full h-full text-center">
        <Header />
        {!isSubmitted ? (
          <>
            <h1 className="text-3xl font-bold text-purple-600 mt-4">Wallet Tracker</h1>
            <p className="text-lg mt-4 text-white">Please enter a wallet address to track it</p>
            <div className="mt-32 flex justify-center">
              <input 
                type="text" 
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600" 
                placeholder="Wallet Address" 
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button 
                className="p-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                onClick={handleSubmit}
              >
                Check
              </button>
            </div>
            <p className="mt-32 text-gray-600">Coded for educational purposes to learn NextJS, Rust, Anchor & Styled with TailwindCSS</p>
          </>
        ) : (
          <>
            <div className="mt-8 w-full max-w-screen-lg flex justify-between items-center bg-black p-4 rounded-md">
              <div className="text-left text-white">
                <h2 className="text-2xl font-bold text-purple-600">Wallet Details:</h2>
                <h1 className="text-2xl font-bold mt-4">Wallet Balance: ${totalBalance}</h1>
                <p className="text-lg mt-2">24h Change: {totalChange}%</p>
                <p className="text-lg mt-2 flex items-center">
                  Wallet Address: {walletAddress}
                  <IconButton onClick={handleToggleTracking} color="inherit">
                    {isTracking ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </p>
              </div>
              <div className="w-1/2 flex flex-col items-center">
                <Pie data={pieData} options={{ maintainAspectRatio: false }} width={200} height={200} />
              </div>
            </div>
            <div className="w-full border-t border-gray-600 my-8"></div>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Your 12 Month Recap...</h2>
            <div className="mt-4 w-full h-96 bg-black max-w-screen-lg flex justify-center items-center">
              <Line data={lineData} options={lineOptions} />
            </div>
            <h2 className="text-2xl font-bold text-purple-600 mt-8">Asset Breakdown</h2>
            <div className="mt-4 max-w-screen-lg w-full bg-black p-4 rounded-md">
              <table className="min-w-full bg-black">
                <thead>
                  <tr>
                    <th className="py-2 text-white">Asset</th>
                    <th className="py-2 text-white">Amount</th>
                    <th className="py-2 text-white">Price Change (%)</th>
                    <th className="py-2 text-white">Price (USD)</th>
                    <th className="py-2 text-white">Value (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {assetData.map((asset, index) => (
                    <tr key={index}>
                      <td className="py-2 text-white">{asset.name}</td>
                      <td className="py-2 text-white">{asset.amount}</td>
                      <td className="py-2 text-white">{asset.change}</td>
                      <td className="py-2 text-white">${asset.price.toFixed(2)}</td>
                      <td className="py-2 text-white">${asset.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button 
              className="mt-8 p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              onClick={handleBack}
            >
              Back
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Main