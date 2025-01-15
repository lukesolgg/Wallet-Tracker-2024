import React from 'react';

const GetMoreInfo: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Unlock Insights</h2>
        <p className="text-lg mb-6">Connect your wallet for personalized portfolio analysis</p>
        <button 
          className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default GetMoreInfo;