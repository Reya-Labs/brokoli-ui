import React from 'react';

import { IconStyled } from './TokenIcon.styled';

export type TokenIconProps = {
  'data-testid'?: string;
  token: 'aave' | 'compound' | 'dai' | 'eth' | 'glp' | 'reth' | 'steth' | 'usdc' | 'usdt';
};

export const TokenIcon: React.FunctionComponent<TokenIconProps> = ({
  'data-testid': dataTestId,
  token,
}) => {
  return <IconStyled data-testid={dataTestId} name={token} />;
};
