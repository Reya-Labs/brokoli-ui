import React from 'react';

import { ReactComponent as BTCIcon } from './assets/btc.svg';
import { ReactComponent as DaiIcon } from './assets/dai.svg';
import { ReactComponent as EthIcon } from './assets/eth.svg';
import { ReactComponent as OtherIcon } from './assets/other.svg';
import { ReactComponent as REthIcon } from './assets/reth.svg';
import { ReactComponent as StEthIcon } from './assets/steth.svg';
import { ReactComponent as USDCIcon } from './assets/usdc.svg';
import { ReactComponent as USDTIcon } from './assets/usdt.svg';

export type IconProps = {
  token: SupportedTokenIcons | string;
  className?: string;
  'data-testid'?: string;
};

export type SupportedTokenIcons =
  | 'other'
  | 'btc'
  | 'dai'
  | 'eth'
  | 'reth'
  | 'steth'
  | 'usdc'
  | 'usdt';

const TokenIconMap: Record<
  SupportedTokenIcons,
  React.FunctionComponent<{ viewBox?: string; className?: string }>
> = {
  btc: BTCIcon,
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
