import React from 'react';

import { IconsBox, IconStyled, MarketTokenBox, MarketTokenTypography } from './MarketToken.styled';

export const MarketToken: React.FunctionComponent<{
  token: 'aave' | 'compound' | 'dai' | 'eth' | 'glp' | 'reth' | 'steth' | 'usdc' | 'usdt';
  market: 'aave' | 'compound' | 'dai' | 'eth' | 'glp' | 'reth' | 'steth' | 'usdc' | 'usdt';
}> = ({ token, market }) => {
  return (
    <MarketTokenBox>
      <IconsBox>
        <IconStyled name={market} />
        <IconStyled name={token} />
      </IconsBox>
      <MarketTokenTypography colorToken="lavenderWeb" typographyToken="primaryHeader2Black">
        {market} - {token.toUpperCase()}
      </MarketTokenTypography>
    </MarketTokenBox>
  );
};
