import React from 'react';

import { Icon, IconProps } from './Icon';

export type MarketIconProps = IconProps & {
  size?: number;
};

export const MarketIcon: React.FunctionComponent<MarketIconProps> = ({ size, ...props }) => {
  return <Icon {...props} height={size} width={size} />;
};
