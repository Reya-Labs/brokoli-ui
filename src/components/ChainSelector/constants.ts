import { SupportedChainIcons } from '../Icons/ChainIcon/Icon/constants';

export type SupportedChainNames = keyof typeof CHAIN_NAME_MAP;
export const CHAIN_NAME_MAP: Record<SupportedChainIcons, string> = {
  1: 'Ethereum',
  10: 'OP Mainnet',
  1101: 'Polygon zkEVM',
  11155111: 'Sepolia',
  11155420: 'Optimism Sepolia',
  137: 'Polygon',
  1442: 'Polygon zkEVM Testnet',
  1729: 'Reya',
  420: 'Optimism Goerli',
  42161: 'Arbitrum One',
  421613: 'Arbitrum Goerli',
  421614: 'Arbitrum Sepolia',
  42170: 'Arbitrum Nova',
  5: 'Goerli',
  80001: 'Polygon Mumbai',
  8453: 'Base',
  89346161: 'Reya Cronos',
};
