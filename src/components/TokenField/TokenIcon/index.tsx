import React from 'react';

import { IconStyled } from './TokenIcon.styled';

export type TokenIconProps = {
  token: 'aave' | 'compound' | 'dai' | 'eth' | 'glp' | 'reth' | 'steth' | 'usdc' | 'usdt';
};

export const TokenIcon: React.FunctionComponent<TokenIconProps> = ({ token }) => {
  return <IconStyled name={token} />;
};
