import React from 'react';

import DaiIcon from './assets/dai.svg';
import EthIcon from './assets/eth.svg';
import OtherIcon from './assets/other.svg';
import REthIcon from './assets/reth.svg';
import StEthIcon from './assets/steth.svg';
import USDCIcon from './assets/usdc.svg';
import USDTIcon from './assets/usdt.svg';

export type IconProps = {
  token: SupportedTokenIcons | string;
  className?: string;
  'data-testid'?: string;
};

export type SupportedTokenIcons = 'other' | 'dai' | 'eth' | 'reth' | 'steth' | 'usdc' | 'usdt';

const TokenIconMap: Record<
  SupportedTokenIcons,
  React.FunctionComponent<{ viewBox?: string; className?: string }>
> = {
  dai: DaiIcon,
  eth: EthIcon,
  other: OtherIcon,
  reth: REthIcon,
  steth: StEthIcon,
  usdc: USDCIcon,
  usdt: USDTIcon,
};

export const Icon: React.FunctionComponent<IconProps> = ({
  'data-testid': dataTestId,
  token,
  className,
}) => {
  const SupportedIcon = TokenIconMap[token as SupportedTokenIcons];
  if (!SupportedIcon) {
    return null;
  }
  return (
    <SupportedIcon
      className={className}
      data-testid={dataTestId || `Icon-${token}`}
      viewBox="0 0 40 40"
    />
  );
};
