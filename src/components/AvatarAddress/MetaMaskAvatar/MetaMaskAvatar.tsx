import React from 'react';

import { getMetamaskAvatar } from '../helpers/getMetamaskAvatar';
import { AvatarWrapper } from './MetaMaskAvatar.styled';

type Props = {
  address: string;
  variant: 'medium' | 'small';
};

export const MetaMaskAvatar: React.FunctionComponent<Props> = ({ variant, address }) => {
  const size = variant === 'medium' ? 24 : 16;
  return (
    <AvatarWrapper data-testid="MetaMaskAvatar-AvatarWrapper" size={size}>
      <img
        alt="avatar"
        data-testid="MetaMaskAvatar-Image"
        src={getMetamaskAvatar({
          address,
          size,
        })}
      />
    </AvatarWrapper>
  );
};
