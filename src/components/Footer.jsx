import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-950 bg-opacity-80 border-t-gray-100 border-t-2 border-opacity-60 w-full">
      <div className="p-8 flex flex-col items-center mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-purple-600">LK SOL</h1>
          </div>

          <div className="flex space-x-16">
            <div>
              <h2 className="text-lg font-semibold text-white">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <li className="hover:text-gray-300 text-white cursor-pointer">Home</li>
                <li className="hover:text-gray-300 text-white cursor-pointer">Track</li>
                <li className="hover:text-gray-300 text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Portfolio</h2>
              <ul className="mt-2 space-y-2">
                <li className="hover:text-gray-300 text-white cursor-pointer">My Portfolio</li>
                <li className="hover:text-gray-300 text-white cursor-pointer">Other Projects</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <ul className="mt-2 space-y-2">
                <li className="hover:text-gray-300 text-white cursor-pointer">Email</li>
                <li className="hover:text-gray-300 text-white cursor-pointer">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-300">Made with Love - Dec. 2024</p>
      </div>
    </div>
  )
}

export default Footer