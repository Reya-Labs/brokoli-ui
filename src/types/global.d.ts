export {};

interface EthereumProvider {
  isMetaMask?: boolean;
}
declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}
