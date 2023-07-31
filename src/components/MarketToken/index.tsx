import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { MarketIcon, MarketIconProps, TokenIcon } from '../Icons';
import { Typography, TypographyToken } from '../Typography';
import { IconsBox, MarketTokenBox } from './MarketToken.styled';

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

const MAP_MARKET_TO_ICON: Record<
  NonNullable<MarketTokenProps['market']>,
  MarketIconProps['market']
> = {
  Aave: 'aave',
  'Aave V2': 'aave',
  'Aave V3': 'aave',
  Compound: 'compound',
  'GMX:GLP': 'glp',
  Lido: 'lido',
  Rocket: 'rocket',
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
            <MarketIcon
              data-testid={`MarketToken-MarketIconStyled-${MAP_MARKET_TO_ICON[market]}`}
              market={MAP_MARKET_TO_ICON[market]}
              size={iconSize}
            />
          ) : null}
          {token ? (
            <TokenIcon
              data-testid={`MarketToken-TokenIconStyled-${token}`}
              size={iconSize}
              token={token}
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
