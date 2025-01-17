import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const GetMoreInfo: React.FC = () => {
  return (
    <section className=" text-white p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <FaChartLine className="text-[30rem] text-blue-500" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4">Unlock Insights</h2>
          <p className="text-2xl mb-6">Connect your wallet for personalized portfolio analysis</p>
          <button 
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetMoreInfo;