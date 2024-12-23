import React from 'react'

function Navbar() {
  return (
    <div className="bg-black bg-opacity-80 border-b-gray-100 border-b-2 border-opacity-60 w-full">
      <div className="p-4 flex justify-between items-center mx-auto max-w-screen-xl">
        <div>
          <h1 className="text-xl font-bold text-purple-600 cursor-pointer">LK SOL</h1>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 text-white cursor-pointer">Home</li>
            <li className="hover:text-gray-300 text-white cursor-pointer">Track</li>
            <li className="hover:text-gray-300 text-white cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar