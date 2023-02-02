import { getMetamaskAvatar } from './';

describe('getMetamaskAvatar', () => {
  it('returns an empty string for an invalid address', () => {
    expect(getMetamaskAvatar({ address: '', size: 128 })).toEqual('');
    expect(getMetamaskAvatar({ address: '0x', size: 128 })).toEqual('');
    expect(getMetamaskAvatar({ address: '0x1234', size: 128 })).toEqual('');
  });

  it('returns a unique URL for each address and size combination', () => {
    const url1 = getMetamaskAvatar({
      address: '0x1234123412341234123412341234123412341234',
      size: 128,
    });
    const url2 = getMetamaskAvatar({
      address: '0x1234123412341234123412341234123412341234',
      size: 256,
    });
    const url3 = getMetamaskAvatar({
      address: '0x5678567856785678567856785678567856785678',
      size: 128,
    });
    expect(url1).not.toEqual(url2);
    expect(url1).not.toEqual(url3);
    expect(url2).not.toEqual(url3);
  });

  it('caches the results for each address and size combination', () => {
    const url1 = getMetamaskAvatar({
      address: '0x1234123412341234123412341234123412341234',
      size: 128,
    });
    const url2 = getMetamaskAvatar({
      address: '0x1234123412341234123412341234123412341234',
      size: 128,
    });
    expect(url1).toEqual(url2);
  });
});
