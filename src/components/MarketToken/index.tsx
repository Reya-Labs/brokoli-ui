import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { SupportedIcons } from '../Icon';
import { Typography, TypographyToken } from '../Typography';
import { IconsBox, IconStyled, MarketTokenBox } from './MarketToken.styled';

export type MarketTokenProps = {
  token?: 'eth' | 'usdc' | 'usdt' | 'dai';
  // todo: soon deprecated 'Aave'
  market?: 'Aave' | 'Aave V2' | 'Aave V3' | 'Compound' | 'Lido' | 'Rocket' | 'GMX:GLP' | 'SOFR';
  iconSize: number;
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
  infoFormatter?: ({
    market,
    token,
  }: {
    market?: MarketTokenProps['market'];
    token?: MarketTokenProps['token'];
  }) => React.ReactNode;
};

const MAP_MARKET_TO_ICON: Record<NonNullable<MarketTokenProps['market']>, SupportedIcons> = {
  Aave: 'aave',
  'Aave V2': 'aave',
  'Aave V3': 'aave',
  Compound: 'compound',
  'GMX:GLP': 'glp',
  Lido: 'steth',
  Rocket: 'reth',
  SOFR: 'sofr',
};

const defaultInfoFormatter = ({
  market,
  token,
}: {
  market?: MarketTokenProps['market'];
  token?: MarketTokenProps['token'];
}) => {
  if (market && token) {
    return `${market}-${token.toUpperCase()}`;
  }
  if (market) {
    return `${market}`;
  }
  if (token) {
    return `${token.toUpperCase()}`;
  }
  return '';
};

export const MarketToken: React.FunctionComponent<MarketTokenProps> = ({
  iconSize,
  typographyToken,
  colorToken,
  token,
  market,
  infoFormatter = defaultInfoFormatter,
}) => {
  return (
    <MarketTokenBox data-testid="MarketToken-MarketTokenBox">
      {iconSize > 0 && (market || token) ? (
        <IconsBox data-testid="MarketToken-IconsBox">
          {market ? (
            <IconStyled
              data-testid={`MarketToken-IconStyled-${MAP_MARKET_TO_ICON[market]}`}
              name={MAP_MARKET_TO_ICON[market]}
              size={iconSize}
            />
          ) : null}
          {token ? (
            <IconStyled
              data-testid={`MarketToken-IconStyled-${token}`}
              name={token}
              size={iconSize}
            />
          ) : null}
        </IconsBox>
      ) : null}
      <Typography
        colorToken={colorToken}
        data-testid={`MarketToken-Typography-${colorToken}-${typographyToken}`}
        typographyToken={typographyToken}
      >
        {infoFormatter({ market, token })}
      </Typography>
    </MarketTokenBox>
  );
};
