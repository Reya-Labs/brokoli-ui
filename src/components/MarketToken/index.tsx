import React from 'react';

import { SupportedIcons } from '../Icon';
import { Typography } from '../Typography';
import { IconsBox, IconStyled, MarketTokenBox } from './MarketToken.styled';

export type MarketTokenProps = {
  token?: 'eth' | 'usdc' | 'usdt' | 'dai';
  market: 'Aave' | 'Compound' | 'Lido' | 'Rocket' | 'GMX:GLP';
};

const MAP_MARKET_TO_ICON: Record<MarketTokenProps['market'], SupportedIcons> = {
  'GMX:GLP': 'glp',
  Aave: 'aave',
  Compound: 'compound',
  Lido: 'steth',
  Rocket: 'reth',
};

export const MarketToken: React.FunctionComponent<MarketTokenProps> = ({ token, market }) => {
  return (
    <MarketTokenBox>
      <IconsBox>
        <IconStyled name={MAP_MARKET_TO_ICON[market]} />
        {token ? <IconStyled name={token} /> : null}
      </IconsBox>
      <Typography colorToken="lavenderWeb" typographyToken="primaryHeader2Black">
        {market + (token ? `-${token.toUpperCase()}` : '')}
      </Typography>
    </MarketTokenBox>
  );
};
