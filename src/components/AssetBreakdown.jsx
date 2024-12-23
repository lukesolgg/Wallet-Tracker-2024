import React from 'react';
import AssetTable from './AssetTable';

const AssetBreakdown = ({ assetData }) => {
  return (
    <div className="mt-4 max-w-screen-lg w-full p-4 rounded-md">
      <h2 className="text-5xl font-extrabold text-white font-open-sans">
        Asset Breakdown
        <br />
        <span className="text-lg text-purple-600 font-sans">
          Detailed view of your portfolio assets
        </span>
      </h2>
      <div className="mt-4">
        <AssetTable assetData={assetData} />
      </div>
    </div>
  );
};

export default AssetBreakdown;