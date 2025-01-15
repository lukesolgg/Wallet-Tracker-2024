import React, { useEffect, useState } from 'react';

interface SolanaMetrics {
  currentEpoch: number;
  absoluteSlot: number;
  blockHeight: number;
  transactionCount: number;
}

const SolanaStats: React.FC = () => {
  const [metrics, setMetrics] = useState<SolanaMetrics>({
    currentEpoch: 0,
    absoluteSlot: 0,
    blockHeight: 0,
    transactionCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSolanaMetrics = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_SOLSCAN_API_KEY;
  
    if (!API_KEY) {
      setError('API key not configured');
      return;
    }
  
    const headers = {
      'Accept': 'application/json',
      'token': API_KEY
    };
  
    try {
      const chainInfo = await fetch('https://public-api.solscan.io/chaininfo', { 
        method: 'GET', 
        headers 
      });
  
      if (!chainInfo.ok) {
        throw new Error(`Chain info request failed with status ${chainInfo.status}`);
      }
  
      const chainData = await chainInfo.json();
      console.log('Chain Data:', chainData);
  
      // Update metrics with available data
      setMetrics({
        currentEpoch: Number(chainData?.data?.currentEpoch || 0),
        absoluteSlot: Number(chainData?.data?.absoluteSlot || 0),
        blockHeight: Number(chainData?.data?.blockHeight || 0),
        transactionCount: Number(chainData?.data?.transactionCount || 0),
      });
  
    } catch (err) {
      console.error('API Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSolanaMetrics();
    const interval = setInterval(fetchSolanaMetrics, 60000);
    return () => clearInterval(interval);
  }, []);

  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Current Epoch</h3>
          <p className="text-2xl font-bold text-white">{metrics.currentEpoch}</p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Absolute Slot</h3>
          <p className="text-2xl font-bold text-white">{metrics.absoluteSlot.toLocaleString()}</p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Block Height</h3>
          <p className="text-2xl font-bold text-white">{metrics.blockHeight.toLocaleString()}</p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-200">
          <h3 className="text-lg font-medium text-gray-200 mb-4">Transaction Count</h3>
          <p className="text-2xl font-bold text-white">{metrics.transactionCount.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SolanaStats;