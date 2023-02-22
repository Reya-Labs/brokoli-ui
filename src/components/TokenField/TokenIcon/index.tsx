import React from 'react';

import {
  AAveIcon,
  CompoundIcon,
  DaiIcon,
  EthIcon,
  GlpIcon,
  REthIcon,
  StEthIcon,
  USDCIcon,
  USDTIcon,
} from './TokenIcon.styled';

export type TokenIconProps = {
  token: 'aave' | 'compound' | 'dai' | 'eth' | 'glp' | 'reth' | 'steth' | 'usdc' | 'usdt';
};

const IconMap: Record<TokenIconProps['token'], React.FunctionComponent<{ viewBox: string }>> = {
  aave: AAveIcon,
  compound: CompoundIcon,
  dai: DaiIcon,
  eth: EthIcon,
  glp: GlpIcon,
  reth: REthIcon,
  steth: StEthIcon,
  usdc: USDCIcon,
  usdt: USDTIcon,
};

export const TokenIcon: React.FunctionComponent<TokenIconProps> = ({ token }) => {
  const Icon = IconMap[token];
  if (!Icon) {
    return null;
  }
  return <Icon viewBox="0 0 40 40" />;
};
