import React from 'react';

import { ChainIconStyled } from './ChainIcon.styled';
import { Icon, IconProps } from './Icon';

export type ChainIconProps = IconProps & {
  size?: number;
  chainId: number;
  'data-testid'?: string;
};

export const ChainIcon: React.FunctionComponent<ChainIconProps> = ({ size, ...props }) => {
  if (!size) {
    return <Icon {...props} />;
  }
  return <ChainIconStyled size={size} {...props} />;
};
