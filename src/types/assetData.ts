import { Asset } from './asset';

export const INITIAL_ASSETS: Asset[] = [
  {
    name: 'bitcoin',
    ticker: 'BTC',
    amount: 0.5,
    price: 67245.00,
    change: '+4.76',
    value: '33622.50',
    image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
  },
  {
    name: 'ethereum',
    ticker: 'ETH',
    amount: 2.5,
    price: 3345.00,
    change: '+2.13',
    value: '8362.50',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png'
  },
  {
    name: 'solana',
    ticker: 'SOL',
    amount: 50,
    price: 184.00,
    change: '+2.73',
    value: '9200.00',
    image: 'https://assets.coingecko.com/coins/images/4128/small/solana.png'
  }
];