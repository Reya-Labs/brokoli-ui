import { getENSDetails } from '.';

jest.mock('ethers', () => ({
  ethers: {
    BrowserProvider: function () {
      return {
        getResolver: jest.fn().mockResolvedValue({
          getAvatar: jest.fn().mockResolvedValue('AVATAR_URL'),
        }),
        lookupAddress: jest.fn().mockResolvedValue('ENS_NAME'),
      };
    },
  },
}));

describe('getENSDetails', () => {
  it('getENSDetails should return null when no address', async () => {
    const retValue = await getENSDetails('');
    expect(retValue).toBeNull();
  });

  it('getENSDetails should return null when no web3Provider', async () => {
    expect(await getENSDetails('', null)).toBeNull();
    expect(await getENSDetails('', undefined)).toBeNull();
  });

  it('getENSDetails should return name and avatar when resolvers return proper values', async () => {
    const result = await getENSDetails('0xfake', jest.fn());
    expect(result).toEqual({ avatarUrl: 'AVATAR_URL', name: 'ENS_NAME' });
  });
});
