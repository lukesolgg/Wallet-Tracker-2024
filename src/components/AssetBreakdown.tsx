import React from 'react';
import { Asset } from '../types/asset';

interface AssetBreakdownProps {
  assetData: Asset[];
}

const AssetBreakdown: React.FC<AssetBreakdownProps> = ({ assetData }) => {
  const totalValue = assetData.reduce((sum, asset) => sum + parseFloat(asset.value), 0);

  return (
    <div className="w-full p-4 md:p-6 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white font-open-sans">
        Asset Breakdown
        <br />
        <span className="text-base md:text-lg text-purple-600 font-sans">Detailed view of your portfolio composition</span>
      </h2>
      <div className="mt-4 md:mt-6 overflow-x-auto">
        <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-2 px-4 text-left text-white text-sm md:text-base">Asset</th>
              <th className="py-2 px-4 text-right text-white text-sm md:text-base">Amount</th>
              <th className="py-2 px-4 text-right text-white text-sm md:text-base">Price</th>
              <th className="py-2 px-4 text-right text-white text-sm md:text-base">Value</th>
              <th className="py-2 px-4 text-right text-white text-sm md:text-base">Share</th>
            </tr>
          </thead>
          <tbody>
            {assetData.map((asset, index) => (
              <tr key={index} className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">
                  <div className="flex items-center">
                    <img src={asset.image} alt={asset.name} className="w-6 h-6 mr-2" />
                    <span>{asset.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4 text-white text-right">{asset.amount}</td>
                <td className="py-2 px-4 text-white text-right">${asset.price}</td>
                <td className="py-2 px-4 text-white text-right">${asset.value}</td>
                <td className="py-2 px-4 text-white text-right">
                  {((parseFloat(asset.value) / totalValue) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetBreakdown;