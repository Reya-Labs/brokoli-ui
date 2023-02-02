import React, { FunctionComponent, useEffect, useState } from 'react';

import { WalletConnectLoading } from '../WalletConnectLoading/WalletConnectLoading';
import { AddressTypography, AvatarAddressBox, AvatarAddressImg } from './AvatarAddress.styled';
import { formatEthereumAddress } from './helpers/formatEthereumAddress';
import { getENSDetails } from './helpers/getENSDetails';
import { MetaMaskAvatar } from './MetaMaskAvatar/MetaMaskAvatar';

export const AvatarAddress: FunctionComponent<{
  address?: string | null;
}> = ({ address }) => {
  const [name, setName] = useState(address);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchENSDetails = async (addr: string) => {
    setLoading(true);
    const details = await getENSDetails(addr);
    setName(details?.name || addr);
    setAvatarUrl(details?.avatarUrl || '');
    setLoading(false);
  };

  useEffect(() => {
    if (!address) {
      setLoading(false);
      return;
    }
    void fetchENSDetails(address);
  }, [address]);

  if (!name) {
    return null;
  }
  const formattedName = formatEthereumAddress(name);

  return (
    <AvatarAddressBox data-testid="AvatarAddress">
      {loading ? (
        <WalletConnectLoading />
      ) : (
        <>
          {!avatarUrl ? (
            <MetaMaskAvatar address={address || ''} />
          ) : (
            <AvatarAddressImg alt="avatar" src={avatarUrl} />
          )}
          <AddressTypography
            colorToken="lavenderWeb"
            data-testid="AvatarAddress-AddressTypography"
            typographyToken="bodyMediumRegular"
          >
            {formattedName[0].toUpperCase() + formattedName.substring(1)}
          </AddressTypography>
        </>
      )}
    </AvatarAddressBox>
  );
};
