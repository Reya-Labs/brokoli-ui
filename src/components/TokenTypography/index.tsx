import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { AttentionIndicator } from '../AttentionIndicator';
import { TypographyToken } from '../Typography';
import { ReactComponent as DownIcon } from './assets/down.svg';
import { ReactComponent as UpIcon } from './assets/up.svg';
import { TokenTypographyStyled } from './TokenTypography.styled';

export type TokenTypographyProps = {
  colorToken: BaseColorTokens;
  value: string | number;
  typographyToken: TypographyToken;
  token: string;
  prefixToken?: string;
  differenceValue?: number;
  differenceToken?: string;
  value2?: string | number;
  'data-testid'?: string;
  attentionIndicatorColorToken?: ColorTokens;
};

export const TokenTypography: React.FunctionComponent<TokenTypographyProps> = ({
  differenceToken,
  value2,
  differenceValue = NaN,
  token,
  typographyToken,
  value,
  colorToken,
  'data-testid': dataTestId,
  prefixToken,
  attentionIndicatorColorToken,
}) => (
  <TokenTypographyStyled
    colorToken={colorToken}
    data-testid={
      dataTestId || `TokenTypography-TokenTypographyStyled-${colorToken}-${typographyToken}`
    }
    typographyToken={typographyToken}
  >
    {attentionIndicatorColorToken ? (
      <AttentionIndicator
        className="attentionIndicator"
        colorToken={attentionIndicatorColorToken}
      />
    ) : null}
    {prefixToken ? (
      <strong className="token" data-testid="TokenTypography-Prefix-Value">
        {prefixToken}
      </strong>
    ) : null}
    {value}
    {token ? (
      <strong className="token" data-testid="TokenTypography-Token-Value">
        {token}
      </strong>
    ) : null}
    {value2 !== undefined && value2 !== null ? (
      <React.Fragment>
        &nbsp;/&nbsp;
        {prefixToken ? (
          <strong className="token" data-testid="TokenTypography-Prefix-Value2">
            {prefixToken}
          </strong>
        ) : null}
        {value2}
      </React.Fragment>
    ) : null}
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
