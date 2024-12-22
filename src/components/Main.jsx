import React from 'react'
import Header from '../components/Header.jsx'

function Main() {
  return (
    <div className="flex-grow flex items-center justify-center pt-16">
      <div className="bg-white bg-opacity-80 p-8 flex flex-col items-center justify-center max-w-screen-xl w-full h-full text-center">
        <Header />
        <h1 className="text-3xl font-bold text-purple-600 mt-4">Wallet Tracker</h1>
        <p className="text-lg mt-2">Please enter a wallet address to track it</p>
        <div className="mt-4 flex justify-center">
          <input 
            type="text" 
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600" 
            placeholder="Wallet Address" 
          />
          <button className="p-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Check
          </button>
        </div>
        <p className="mt-8 text-gray-600">Coded for educational purposes to learn NextJS, Rust, Anchor & Styled with TailwindCSS</p>
      </div>
    </div>
  )
}

export default Main