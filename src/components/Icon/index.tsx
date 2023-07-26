import React from 'react';

import { ReactComponent as AAveIcon } from './assets/aave.svg';
import { ReactComponent as CompoundIcon } from './assets/compound.svg';
import { ReactComponent as DaiIcon } from './assets/dai.svg';
import { ReactComponent as EthIcon } from './assets/eth.svg';
import { ReactComponent as GlpIcon } from './assets/glp.svg';
import { ReactComponent as REthIcon } from './assets/reth.svg';
import { ReactComponent as SOFRIcon } from './assets/sofr.svg';
import { ReactComponent as StEthIcon } from './assets/steth.svg';
import { ReactComponent as USDCIcon } from './assets/usdc.svg';
import { ReactComponent as USDTIcon } from './assets/usdt.svg';

type IconProps = {
  name: SupportedIcons;
  className?: string;
  'data-testid'?: string;
};

export type SupportedIcons =
  | 'aave'
  | 'compound'
  | 'dai'
  | 'eth'
  | 'glp'
  | 'reth'
  | 'steth'
  | 'usdc'
  | 'sofr'
  | 'usdt';

const IconMap: Record<
  SupportedIcons,
  React.FunctionComponent<{ viewBox?: string; className?: string }>
> = {
  aave: AAveIcon,
  compound: CompoundIcon,
  dai: DaiIcon,
  eth: EthIcon,
  glp: GlpIcon,
  reth: REthIcon,
  sofr: SOFRIcon,
  steth: StEthIcon,
  usdc: USDCIcon,
  usdt: USDTIcon,
};

export const Icon: React.FunctionComponent<IconProps> = ({
  'data-testid': dataTestId,
  name,
  className,
}) => {
  const SupportedIcon = IconMap[name];
  if (!SupportedIcon) {
    return null;
  }
  return (
    <SupportedIcon
      className={className}
      data-testid={dataTestId || `Icon-${name}`}
      viewBox="0 0 40 40"
    />
  );
};
