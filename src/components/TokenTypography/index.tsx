import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { AttentionIndicator } from '../AttentionIndicator';
import { ReactComponent as DownIcon } from './assets/down.svg';
import { ReactComponent as UpIcon } from './assets/up.svg';
import {
  DifferenceArrow,
  DifferenceToken,
  DifferenceValue,
  PrefixToken,
  Token,
  TokenTypographyStyled,
} from './TokenTypography.styled';

export type TokenTypographyProps = {
  attentionIndicatorColorToken?: ColorTokens;
  className?: string;
  colorToken: ColorTokens;
  'data-testid'?: string;
  differenceColorToken?: ColorTokens;
  differenceToken?: string;
  differenceValue?: number;
  prefixColorToken?: ColorTokens;
  prefixToken?: string;
  token: string;
  token2?: string;
  tokenColorToken?: ColorTokens;
  typographyToken: TypographyTokens;
  value: string | number;
  value2?: string | number;
};

export const TokenTypography: React.FunctionComponent<TokenTypographyProps> = ({
  differenceToken,
  value2,
  differenceValue = NaN,
  token,
  token2 = token,
  typographyToken,
  value,
  colorToken,
  'data-testid': dataTestId,
  prefixToken,
  attentionIndicatorColorToken,
  prefixColorToken,
  tokenColorToken = 'white100',
  differenceColorToken = 'white100',
  className,
}) => (
  <TokenTypographyStyled
    className={className}
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
    {prefixToken && prefixColorToken ? (
      <PrefixToken colorToken={prefixColorToken} data-testid="TokenTypography-Prefix-Value">
        {prefixToken}
      </PrefixToken>
    ) : null}
    {value}
    {token ? (
      <Token colorToken={tokenColorToken} data-testid="TokenTypography-Token-Value">
        {token}
      </Token>
    ) : null}
    {value2 !== undefined && value2 !== null ? (
      <React.Fragment>
        &nbsp;/&nbsp;
        {prefixToken && prefixColorToken ? (
          <PrefixToken colorToken={prefixColorToken} data-testid="TokenTypography-Prefix-Value2">
            {prefixToken}
          </PrefixToken>
        ) : null}
        {value2}
      </React.Fragment>
    ) : null}
    {value2 !== undefined && value2 !== null && token2 ? (
      <Token colorToken={tokenColorToken} data-testid="TokenTypography-Token-Token2">
        {token2}
      </Token>
    ) : null}
    {isNaN(differenceValue) || !differenceColorToken ? null : (
      <React.Fragment>
        <DifferenceArrow colorToken={differenceColorToken} typographyToken={typographyToken}>
          {differenceValue > 0 ? (
            <UpIcon data-testid="TokenTypography-UpIcon" />
          ) : (
            <DownIcon data-testid="TokenTypography-DownIcon" />
          )}
        </DifferenceArrow>
        <DifferenceValue
          colorToken={differenceColorToken}
          data-testid="TokenTypography-DifferenceValue"
          typographyToken={typographyToken}
        >
          {differenceValue > 0 ? differenceValue : -differenceValue}
        </DifferenceValue>
        <DifferenceToken
          colorToken={differenceColorToken}
          data-testid="TokenTypography-DifferenceToken"
          typographyToken={typographyToken}
        >
          {differenceToken}
        </DifferenceToken>
      </React.Fragment>
    )}
  </TokenTypographyStyled>
);
