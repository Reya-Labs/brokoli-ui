import { formatEthereumAddress } from './index';

describe('formatEthereumAddress', () => {
  test.each([
    [undefined, ''],
    [null, ''],
    ['', ''],
    ['not-an-address-for-sure', 'not-an-address-for-sure'],
    ['0xb01F14d1C9000D453241221EB54648F1C378c970', '0xb01F...c970'],
  ])('given %p arguments, returns %p making sure it properly elide address', (address, result) => {
    expect(formatEthereumAddress(address)).toEqual(result);
  });
});
