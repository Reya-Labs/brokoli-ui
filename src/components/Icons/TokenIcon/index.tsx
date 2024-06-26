import React from 'react';

import { Icon, IconProps } from './Icon';

export type TokenIconProps = IconProps & {
  size?: number;
};

export const TokenIcon: React.FunctionComponent<TokenIconProps> = ({ size, ...props }) => {
  return <Icon {...props} height={size} width={size} />;
};
