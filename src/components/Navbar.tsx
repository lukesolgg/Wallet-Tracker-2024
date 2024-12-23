import React from 'react';
import { IconButton } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';

interface NavbarProps {
  handleBack: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleBack }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={handleBack}
          >
            <span className="text-purple-600 text-xl font-bold">SOL</span>
            <span className="text-white text-xl font-bold ml-1">Tracker</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white flex items-center hover:text-purple-600 transition-colors duration-300"
            >
              <DescriptionIcon style={{ color: 'white', marginRight: '4px' }} />
              View Docs
            </a>
            
            <div className="relative">
              <div className="w-10 h-10 bg-black cursor-pointer rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 100 100">
                  <circle
                    className="animate-outline-circle"
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#9333EA"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <IconButton 
              style={{ 
                backgroundColor: 'black', 
                borderRadius: '8px', 
                padding: '8px' 
              }}
            >
              <SettingsIcon style={{ color: 'white' }} />
            </IconButton>

            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
              Connect
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;