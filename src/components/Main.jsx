"use client";

import React, { useState, useEffect } from 'react'
import Header from '../components/Header.jsx'
import { Pie, Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import moment from 'moment'

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

function Main() {
  const [walletAddress, setWalletAddress] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTracking, setIsTracking] = useState(false)
  const [assets, setAssets] = useState([
    { name: 'solana', ticker: 'SOL', amount: 4, image: 'https://assets.coingecko.com/coins/images/4128/standard/solana.png?1718769756' },
    { name: 'gigachad-2', ticker: 'GIGA', amount: 15364, image: 'https://assets.coingecko.com/coins/images/34755/standard/IMG_0015.png?1705957165' },
    { name: 'lock-in', ticker: 'LOCKIN', amount: 2499, image: 'https://assets.coingecko.com/coins/images/38646/standard/lockin.png?1718212159' },
    { name: 'magic-eden', ticker: 'ME', amount: 340, image: 'https://assets.coingecko.com/coins/images/39850/standard/_ME_Profile_Dark_2x.png?1734013082' },
    { name: 'popcat', ticker: 'POPCAT', amount: 280, image: 'https://assets.coingecko.com/coins/images/33760/standard/image.jpg?1702964227' }
  ])

  useEffect(() => {
    const fetchTokenData = async () => {
      const ids = assets.map(asset => asset.name).join(',')
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`)
      const data = await response.json()

      const updatedAssets = assets.map(asset => ({
        ...asset,
        price: data[asset.name]?.usd || 0,
        change: data[asset.name]?.usd_24h_change?.toFixed(2) || '0.00'
      }))

      setAssets(updatedAssets)
    }

    fetchTokenData()
  }, [])

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  const assetData = assets.map(asset => ({
    ...asset,
    value: (asset.amount * asset.price).toFixed(2)
  }))

  const totalBalance = assetData.reduce((acc, asset) => acc + parseFloat(asset.value), 0).toFixed(2)
  const totalChange = assetData.reduce((acc, asset) => acc + parseFloat(asset.change), 0).toFixed(2)

  const pieData = {
    labels: assetData.map(asset => asset.ticker),
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

  const transactions = [
    { date: moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Sent' },
    { date: moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Received' },
    { date: moment().subtract(3, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Sent' },
    { date: moment().subtract(4, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Received' },
    { date: moment().subtract(5, 'days').format('YYYY-MM-DD HH:mm:ss'), network: 'SOL', type: 'Sent' }
  ]

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
                onKeyPress={handleKeyPress}
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
            <div className="mt-8 w-full max-w-screen-lg bg-black p-4 rounded-md">
              <h2 className="text-2xl font-bold text-purple-600">Wallet Overview</h2>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-left text-white w-1/2">
                  <h2 className="text-2xl font-bold text-purple-600">Wallet Details:</h2>
                  <h1 className="text-2xl font-bold mt-4">Wallet Balance: ${totalBalance}</h1>
                  <p className="text-lg mt-2">24h Change: {totalChange}%</p>
                  <p className="text-lg mt-2">Wallet Address: {walletAddress}</p>
                  <p className="text-lg mt-2">Created: 117 days ago 4 hours</p>
                  <IconButton onClick={handleToggleTracking} color="inherit">
                    {isTracking ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </div>
                <div className="text-left text-white w-1/2">
                  <h2 className="text-2xl font-bold text-purple-600">Recent Transactions:</h2>
                  <table className="min-w-full bg-black mt-4">
                    <thead>
                      <tr>
                        <th className="py-2 text-white">Date & Time</th>
                        <th className="py-2 text-white">Network</th>
                        <th className="py-2 text-white">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index}>
                          <td className="py-2 text-white text-center">{transaction.date}</td>
                          <td className="py-2 text-white text-center">{transaction.network}</td>
                          <td className="py-2 text-white text-center">{transaction.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full max-w-screen-lg border-t border-gray-600 my-8"></div>

            <div className="mt-4 max-w-screen-lg w-full bg-black p-4 rounded-md">
              <h2 className="text-2xl font-bold text-purple-600 mt-8">Account Overview</h2>
              <div className="mt-4 w-full h-96 flex justify-center items-center">
                <Pie data={pieData} options={{ maintainAspectRatio: false }} width={200} height={200} />
              </div>
            </div>
            <div className="w-full max-w-screen-lg border-t border-gray-600 my-8"></div>

            <div className="mt-4 max-w-screen-lg w-full bg-black p-4 rounded-md">
              <h2 className="text-2xl font-bold text-purple-600 mt-8">Your 12 Month Recap...</h2>
              <div className="mt-4 w-full h-96 flex justify-center items-center">
                <Line data={lineData} options={lineOptions} />
              </div>
            </div>
            <div className="w-full max-w-screen-lg border-t border-gray-600 my-8"></div>

            <div className="mt-4 max-w-screen-lg w-full bg-black p-4 rounded-md">
              <h2 className="text-2xl font-bold text-purple-600 mt-8">Asset Breakdown</h2>
              <div className="mt-4">
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
                        <td className="py-2 text-white text-center flex items-center justify-center">
                          <img src={asset.image} alt={asset.name} className="w-6 h-6 rounded-full mr-2" />
                          {asset.ticker}
                        </td>
                        <td className="py-2 text-white text-center">{asset.amount}</td>
                        <td className="py-2 text-white text-center">{asset.change}%</td>
                        <td className="py-2 text-white text-center">${asset.price.toFixed(2)}</td>
                        <td className="py-2 text-white text-center">${asset.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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