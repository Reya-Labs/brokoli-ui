import React from 'react';

import { Icon, IconProps } from './Icon';
import { MarketIconStyled } from './MarketIcon.styled';

export type MarketIconProps = IconProps & {
  size?: number;
};

export const MarketIcon: React.FunctionComponent<MarketIconProps> = ({ size, ...props }) => {
  if (!size) {
    return <Icon {...props} />;
  }
  return <MarketIconStyled size={size} {...props} />;
};
