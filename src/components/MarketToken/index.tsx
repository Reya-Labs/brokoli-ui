import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { SupportedIcons } from '../Icon';
import { Typography, TypographyToken } from '../Typography';
import { IconsBox, IconStyled, MarketTokenBox } from './MarketToken.styled';

export type MarketTokenProps = {
  token?: 'eth' | 'usdc' | 'usdt' | 'dai';
  market: 'Aave' | 'Compound' | 'Lido' | 'Rocket' | 'GMX:GLP';
  iconSize: number;
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
};

const MAP_MARKET_TO_ICON: Record<MarketTokenProps['market'], SupportedIcons> = {
  'GMX:GLP': 'glp',
  Aave: 'aave',
  Compound: 'compound',
  Lido: 'steth',
  Rocket: 'reth',
};

export const MarketToken: React.FunctionComponent<MarketTokenProps> = ({
  iconSize,
  typographyToken,
  colorToken,
  token,
  market,
}) => {
  return (
    <MarketTokenBox>
      <IconsBox>
        <IconStyled name={MAP_MARKET_TO_ICON[market]} size={iconSize} />
        {token ? <IconStyled name={token} size={iconSize} /> : null}
      </IconsBox>
      <Typography colorToken={colorToken} typographyToken={typographyToken}>
        {market + (token ? `-${token.toUpperCase()}` : '')}
      </Typography>
    </MarketTokenBox>
  );
};
