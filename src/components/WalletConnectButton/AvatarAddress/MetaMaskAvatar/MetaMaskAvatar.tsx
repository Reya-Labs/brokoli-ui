import React from 'react';

import { getMetamaskAvatar } from '../helpers/getMetamaskAvatar';
import { AvatarWrapper } from './MetaMaskAvatar.styled';

type Props = {
  address: string;
};

export const MetaMaskAvatar: React.FunctionComponent<Props> = ({ address }) => (
  <AvatarWrapper data-testid="MetaMaskAvatar-AvatarWrapper">
    <img
      alt="avatar"
      data-testid="MetaMaskAvatar-Image"
      src={getMetamaskAvatar({
        address,
        size: 24,
      })}
    />
  </AvatarWrapper>
);
