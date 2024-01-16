import React from 'react';
import { MetaMaskAvatar } from 'react-metamask-avatar';

import { AvatarAddressImgStyled } from './AvatarAddressImage.styled';

export const AvatarAddressImage: React.FunctionComponent<{
  address: string;
  size: number;
  url?: string | null;
}> = ({ address, size, url }) => {
  return !url ? (
    <MetaMaskAvatar address={address || ''} size={size} />
  ) : (
    <AvatarAddressImgStyled alt="avatar" size={size} src={url} />
  );
};
