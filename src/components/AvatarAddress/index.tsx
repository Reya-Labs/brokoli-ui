import React, { FunctionComponent, useEffect, useState } from 'react';

import { TypographyTokens } from '../../foundation/Typography';
import { AvatarAddressImage } from '../AvatarAddressImage';
import { RainbowLoader } from '../RainbowLoader';
import { AddressTypography, AvatarAddressBox, RainbowLoaderBox } from './AvatarAddress.styled';
import { formatEthereumAddress } from './helpers/formatEthereumAddress';
import { getENSDetails } from './helpers/getENSDetails';

export { formatEthereumAddress } from './helpers/formatEthereumAddress';

export const AvatarAddress: FunctionComponent<{
  address?: string | null;
  avatarSize: 'small' | 'medium';
  isEnsAddress?: boolean;
  typographyToken: TypographyTokens;
}> = ({ isEnsAddress, typographyToken, avatarSize, address }) => {
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
    if (isEnsAddress) {
      return;
    }
    if (!address) {
      setLoading(false);
      return;
    }
    void fetchENSDetails(address);
  }, [isEnsAddress, address]);

  if (!name) {
    return null;
  }
  const formattedName = formatEthereumAddress(name);

  return (
    <AvatarAddressBox data-testid="AvatarAddress">
      {loading ? (
        <RainbowLoaderBox>
          <RainbowLoader height={3} />
        </RainbowLoaderBox>
      ) : (
        <>
          <AvatarAddressImage
            address={address || ''}
            size={avatarSize === 'medium' ? 24 : 16}
            url={avatarUrl}
          />
          <AddressTypography
            colorToken="white100"
            data-testid="AvatarAddress-AddressTypography"
            typographyToken={typographyToken}
          >
            {formattedName}
          </AddressTypography>
        </>
      )}
    </AvatarAddressBox>
  );
};
