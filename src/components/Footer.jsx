import React from 'react'

function Footer() {
  return (
    <div className="bg-white bg-opacity-80 border-t-gray-100 border-t-2 border-opacity-60 w-full">
      <div className="p-8 flex flex-col items-center mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-purple-600">LK SOL</h1>
          </div>

          <div className="flex space-x-16">
            <div>
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <li className="hover:text-gray-700 cursor-pointer">Home</li>
                <li className="hover:text-gray-700 cursor-pointer">Track</li>
                <li className="hover:text-gray-700 cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Portfolio</h2>
              <ul className="mt-2 space-y-2">
                <li className="hover:text-gray-700 cursor-pointer">My Portfolio</li>
                <li className="hover:text-gray-700 cursor-pointer">Other Projects</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Contact</h2>
              <ul className="mt-2 space-y-2">
                <li className="hover:text-gray-700 cursor-pointer">Email</li>
                <li className="hover:text-gray-700 cursor-pointer">LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600">Made with Love - Dec. 2024</p>
      </div>
    </div>
  )
}

export default Footer