import React from 'react';

import { ReactComponent as BTCIcon } from './assets/btc.svg';
import { ReactComponent as DAIIcon } from './assets/dai.svg';
import { ReactComponent as ETHIcon, ReactComponent as WETHIcon } from './assets/eth.svg';
import { ReactComponent as MATICIcon } from './assets/matic.svg';
import { ReactComponent as RETHIcon } from './assets/reth.svg';
import { ReactComponent as RUSDIcon } from './assets/rusd.svg';
import { ReactComponent as SETHIcon } from './assets/seth.svg';
import { ReactComponent as USDCIcon } from './assets/usdc.svg';
import { ReactComponent as USDTIcon } from './assets/usdt.svg';
import { ReactComponent as WBTCIcon } from './assets/wbtc.svg';

export type IconProps = {
  className?: string;
  'data-testid'?: string;
  token: SupportedTokenIcons | string;
};

export type SupportedTokenIcons =
  | 'btc'
  | 'dai'
  | 'eth'
  | 'matic'
  | 'reth'
  | 'rusd'
  | 'seth'
  | 'usdc'
  | 'usdc.e'
  | 'usdt'
  | 'wbtc'
  | 'weth';

const TokenIconMap: Record<
  SupportedTokenIcons,
  React.FunctionComponent<{ className?: string; viewBox?: string }>
> = {
  btc: BTCIcon,
  dai: DAIIcon,
  eth: ETHIcon,
  matic: MATICIcon,
  reth: RETHIcon,
  rusd: RUSDIcon,
  seth: SETHIcon,
  usdc: USDCIcon,
  'usdc.e': USDCIcon,
  usdt: USDTIcon,
  wbtc: WBTCIcon,
  weth: WETHIcon,
};

export const Icon: React.FunctionComponent<IconProps> = ({
  'data-testid': dataTestId,
  token,
  className,
}) => {
  const SupportedIcon = TokenIconMap[token.toLowerCase() as SupportedTokenIcons];
  if (!SupportedIcon) {
    return null;
  }
  return (
    <SupportedIcon
      className={className}
      data-testid={dataTestId || `Icon-${token}`}
      viewBox="0 0 32 32"
    />
  );
};
