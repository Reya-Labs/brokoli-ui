import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { SupportedIcons } from '../Icon';
import { Typography, TypographyToken } from '../Typography';
import { IconsBox, IconStyled, MarketTokenBox } from './MarketToken.styled';

export type MarketTokenProps = {
  token?: 'eth' | 'usdc' | 'usdt' | 'dai';
  market: 'Aave' | 'Compound' | 'Lido' | 'Rocket' | 'GMX:GLP' | 'SOFR';
  iconSize: number;
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
  infoFormatter?: ({
    market,
    token,
  }: {
    market: MarketTokenProps['market'];
    token?: MarketTokenProps['token'];
  }) => React.ReactNode;
};

const MAP_MARKET_TO_ICON: Record<MarketTokenProps['market'], SupportedIcons> = {
  'GMX:GLP': 'glp',
  Aave: 'aave',
  Compound: 'compound',
  Lido: 'steth',
  Rocket: 'reth',
  SOFR: 'sofr',
};

const defaultInfoFormatter = ({
  market,
  token,
}: {
  market: MarketTokenProps['market'];
  token?: MarketTokenProps['token'];
}) => {
  return `${market}${token ? `-${token.toUpperCase()}` : ''}`;
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
      {iconSize > 0 ? (
        <IconsBox data-testid="MarketToken-IconsBox">
          <IconStyled
            data-testid={`MarketToken-IconStyled-${MAP_MARKET_TO_ICON[market]}`}
            name={MAP_MARKET_TO_ICON[market]}
            size={iconSize}
          />
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
