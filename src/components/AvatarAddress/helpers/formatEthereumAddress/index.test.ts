import { formatEthereumAddress } from '.';

describe('formatEthereumAddress', () => {
  test.each([
    [undefined, ''],
    [null, ''],
    ['', ''],
    ['short.name', 'short.name'],
    ['longer.name.web3.rocks', 'longer.name....'],
    ['0xb01F14d1C9000D453241221EB54648F1C378c970', '0xb01F...c970'],
  ])('given %p arguments, returns %p making sure it properly elide address', (address, result) => {
    expect(formatEthereumAddress(address)).toEqual(result);
  });
});
