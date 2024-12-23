import React from 'react'
import { IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import RefreshIcon from '@mui/icons-material/Refresh'
import DescriptionIcon from '@mui/icons-material/Description'

function Navbar() {
  return (
    <div className="bg-gray-950 bg-opacity-80 border-b-gray-100 border-b-2 border-opacity-60 w-full">
      <div className="p-4 flex justify-between items-center mx-auto max-w-screen-xl">
        <div>
          <h1 className="text-xl font-bold text-purple-600 cursor-pointer">LK SOL</h1>
        </div>

        <nav className="flex items-center space-x-4">
          <a href="https://github.com/lukesolgg/Wallet-Tracker-2024" className="hover:text-gray-300 text-white cursor-pointer flex items-center">
            <DescriptionIcon style={{ color: 'white', marginRight: '4px' }} />
            View Docs
          </a>
          <div className="relative">
            <div className="w-10 h-10 bg-black cursor-pointer rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 animate-rotate-circle">
                <circle
                  className="animate-outline-circle"
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="purple"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <IconButton style={{ backgroundColor: 'black', borderRadius: '8px', padding: '8px' }}>
            <SettingsIcon style={{ color: 'white' }} />
          </IconButton>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
            Connect
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar