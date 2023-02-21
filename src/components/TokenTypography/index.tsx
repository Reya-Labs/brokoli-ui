import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { TokenTypographyStyled } from './TokenTypography.styled';

export const TokenTypography: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  value: number;
  typographyToken: TypographyToken;
  token: string;
}> = ({ token, typographyToken, value, colorToken }) => (
  <TokenTypographyStyled colorToken={colorToken} typographyToken={typographyToken}>
    {value}
    <strong>{token}</strong>
  </TokenTypographyStyled>
);
