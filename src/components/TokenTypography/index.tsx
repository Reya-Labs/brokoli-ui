import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { TokenTypographyStyled } from './TokenTypography.styled';

export const TokenTypography: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  value: string | number;
  typographyToken: TypographyToken;
  token: string;
  differenceValue?: number;
}> = ({ differenceValue = NaN, token, typographyToken, value, colorToken }) => (
  <TokenTypographyStyled
    colorToken={colorToken}
    positiveDifference={differenceValue > 0}
    typographyToken={typographyToken}
  >
    {value}
    {token ? <strong>{token}</strong> : null}
    {isNaN(differenceValue) ? null : (
      <React.Fragment>
        <strong>{differenceValue > 0 ? '↑' : '↓'}</strong>
        <strong>{differenceValue > 0 ? differenceValue : -differenceValue}</strong>
        <strong>{token}</strong>
      </React.Fragment>
    )}
  </TokenTypographyStyled>
);
