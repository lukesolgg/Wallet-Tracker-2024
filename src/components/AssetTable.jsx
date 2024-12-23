import React from 'react';

const AssetTable = ({ assetData }) => (
  <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
    <thead className="bg-gray-900">
      <tr>
        <th className="py-3 px-4 text-white text-left pl-8">Token</th>
        <th className="py-3 px-4 text-white text-center">24h Change</th>
        <th className="py-3 px-4 text-white text-center">Amount</th>
        <th className="py-3 px-4 text-white text-center">Value</th>
      </tr>
    </thead>
    <tbody>
      {assetData.map((asset, index) => (
        <tr key={index} className="border-t border-gray-800">
          <td className="py-3 px-4 text-white">
            <div className="flex items-center justify-start pl-4">
              <img src={asset.image} alt={asset.name} className="w-6 h-6 mr-2" />
              {asset.ticker}
            </div>
          </td>
          <td className={`py-3 px-16 text-center ${parseFloat(asset.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {asset.change}%
          </td>
          <td className="py-3 px-16 text-white text-center">{asset.amount}</td>
          <td className="py-3 px-16 text-white text-center">${asset.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AssetTable;