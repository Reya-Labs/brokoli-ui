import { ReactComponent as ArbitrumIcon } from './assets/arbitrum.svg';
import { ReactComponent as EthereumIcon } from './assets/ethereum.svg';
import { ReactComponent as OptimismIcon } from './assets/optimism.svg';
import { ReactComponent as PolygonIcon } from './assets/polygon.svg';
import { ReactComponent as ReyaIcon } from './assets/reya.svg';

export type SupportedChainIcons = keyof typeof CHAIN_ICON_MAP;
export const CHAIN_ICON_MAP = {
  // "Ethereum"
  1: EthereumIcon,

  // "OP Mainnet"
  10: OptimismIcon,

  // "Polygon zkEVM"
  1101: PolygonIcon,

  // "Sepolia"
  11155111: EthereumIcon,

  // "Optimism Sepolia"
  11155420: OptimismIcon,

  // "Polygon"
  137: PolygonIcon,

  // "Polygon zkEVM Testnet"
  1442: PolygonIcon,

  // "Reya Cronos"
  1729: ReyaIcon,

  // "Optimism Goerli"
  420: OptimismIcon,

  // "Arbitrum One"
  42161: ArbitrumIcon,

  // "Arbitrum Goerli"
  421613: ArbitrumIcon,

  // "Arbitrum Sepolia"
  421614: ArbitrumIcon,

  // "Arbitrum Nova"
  42170: ArbitrumIcon,

  // "Goerli"
  5: EthereumIcon,

  // "Polygon Mumbai"
  80001: PolygonIcon,
};
