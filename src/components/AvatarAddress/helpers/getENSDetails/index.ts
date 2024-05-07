import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { getEnsAvatar, getEnsName, normalize } from 'viem/ens';

type ENSDetails = {
  avatarUrl?: string | null;
  name: string;
};

const CACHED_ENS: Record<string, ENSDetails | null> = {};

/**
 * It takes an Ethereum address and returns an object with the ENS name and avatar URL
 * @param {string | null} [address] - The address to look up.
 * you're using Metamask, this is window.ethereum.
 */
export const getENSDetails = async (address: string | null = ''): Promise<ENSDetails | null> => {
  if (!address) {
    return null;
  }
  if (CACHED_ENS[address] !== undefined) {
    return CACHED_ENS[address];
  }
  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });
  let name;
  try {
    name = await getEnsName(client, {
      address: address as `0x${string}`,
    });
  } catch (err) {
    name = null;
  }

  if (!name) {
    CACHED_ENS[address] = null;
    return null;
  }

  let avatar;
  try {
    avatar = await getEnsAvatar(client, { name: normalize(name) });
  } catch (err) {
    avatar = null;
  }

  const result = {
    avatarUrl: avatar,
    name,
  };
  CACHED_ENS[address] = result;
  return result;
};
