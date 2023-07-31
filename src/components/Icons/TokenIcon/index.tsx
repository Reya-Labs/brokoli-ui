import React from 'react';

import { Icon, IconProps } from './Icon';
import { TokenIconStyled } from './TokenIcon.styled';

export type TokenIconProps = IconProps & {
  size?: number;
};

export const TokenIcon: React.FunctionComponent<TokenIconProps> = ({ size, ...props }) => {
  if (!size) {
    return <Icon {...props} />;
  }
  return <TokenIconStyled size={size} {...props} />;
};
