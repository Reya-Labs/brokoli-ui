import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { ReactComponent as DownIcon } from './assets/down.svg';
import { ReactComponent as UpIcon } from './assets/up.svg';
import { TokenTypographyStyled } from './TokenTypography.styled';

export type TokenTypographyProps = {
  colorToken: BaseColorTokens;
  value: string | number;
  typographyToken: TypographyToken;
  token: string;
  differenceValue?: number;
  differenceToken?: string;
  value2?: string | number;
};

export const TokenTypography: React.FunctionComponent<TokenTypographyProps> = ({
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
    data-testid={`TokenTypography-TokenTypographyStyled-${colorToken}-${typographyToken}`}
    typographyToken={typographyToken}
  >
    {value}
    {token ? (
      <strong className="token" data-testid="TokenTypography-Token-Value">
        {token}
      </strong>
    ) : null}
    {value2 !== undefined && value2 !== null ? ` / ${value2}` : null}
    {value2 !== undefined && value2 !== null && token ? (
      <strong className="token" data-testid="TokenTypography-Token-Value2">
        {token}
      </strong>
    ) : null}
    {isNaN(differenceValue) ? null : (
      <React.Fragment>
        <strong className="difference-arrow">
          {differenceValue > 0 ? (
            <UpIcon data-testid="TokenTypography-UpIcon" />
          ) : (
            <DownIcon data-testid="TokenTypography-DownIcon" />
          )}
        </strong>
        <strong className="difference-value" data-testid="TokenTypography-DifferenceValue">
          {differenceValue > 0 ? differenceValue : -differenceValue}
        </strong>
        <strong className="difference-token" data-testid="TokenTypography-DifferenceToken">
          {differenceToken}
        </strong>
      </React.Fragment>
    )}
  </TokenTypographyStyled>
);
