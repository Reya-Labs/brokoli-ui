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
  differenceToken?: string;
  value2?: string | number;
}> = ({
  differenceToken,
  value2,
  differenceValue = NaN,
  token,
  typographyToken,
  value,
  colorToken,
}) => (
  <TokenTypographyStyled
    colorToken={colorToken}
    positiveDifference={differenceValue > 0}
    typographyToken={typographyToken}
  >
    {value}
    {token ? <strong className="token">{token}</strong> : null}
    {value2 !== undefined && value2 !== null ? ` / ${value2}` : null}
    {value2 !== undefined && value2 !== null && token ? (
      <strong className="token">{token}</strong>
    ) : null}
    {isNaN(differenceValue) ? null : (
      <React.Fragment>
        <strong className="difference-arrow">{differenceValue > 0 ? '↑' : '↓'}</strong>
        <strong className="difference-value">
          {differenceValue > 0 ? differenceValue : -differenceValue}
        </strong>
        <strong className="difference-token">{differenceToken}</strong>
      </React.Fragment>
    )}
  </TokenTypographyStyled>
);
