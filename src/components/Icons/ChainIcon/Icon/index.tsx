import React from 'react';

import { CHAIN_ICON_MAP, SupportedChainIcons } from './constants';

export type IconProps = {
  chainId: SupportedChainIcons;
  className?: string;
  'data-testid'?: string;
};

export const Icon: React.FunctionComponent<IconProps> = ({
  'data-testid': dataTestId,
  chainId,
  className,
}) => {
  const SupportedIcon = CHAIN_ICON_MAP[chainId];
  if (!SupportedIcon) {
    return null;
  }
  return (
    <SupportedIcon
      className={className}
      data-testid={dataTestId || `Icon-${chainId}`}
      viewBox="0 0 24 24"
    />
  );
};
