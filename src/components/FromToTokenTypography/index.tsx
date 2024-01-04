import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel } from '../TooltipLabel';
import { Typography } from '../Typography';
import { FromToBox, FromToTokenTypographyBox } from './FromToTokenTypography.styled';

export type FromToTokenTypographyProps = {
  fromColorToken: ColorTokens;
  fromValue: string | number;
  fromToken?: string;
  fromPrefixToken?: string;
  toColorToken: ColorTokens;
  toValue: string | number;
  toToken?: string;
  toPrefixToken?: string;
  typographyToken: TypographyTokens;
  token?: string;
  tokenColorToken?: ColorTokens;
  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  fromPrefixColorToken?: ColorTokens;
  fromTokenColorToken?: ColorTokens;
  toPrefixColorToken?: ColorTokens;
  toTokenColorToken?: ColorTokens;
};

export const FromToTokenTypography: React.FunctionComponent<FromToTokenTypographyProps> = ({
  fromColorToken,
  fromValue,
  fromToken = '',
  fromPrefixToken = '',
  fromTokenColorToken,
  fromPrefixColorToken,
  toColorToken,
  toValue,
  toToken = '',
  toPrefixToken = '',
  toTokenColorToken,
  toPrefixColorToken,
  typographyToken,
  token = '',
  label,
  labelColorToken,
  labelTypographyToken,
  tooltip,
  tooltipColorToken,
  tokenColorToken = 'white100',
}) => (
  <FromToTokenTypographyBox data-testid="FromToTokenTypography-FromToTokenTypographyBox">
    <TooltipLabel
      data-testid="FromToTokenTypography-TooltipLabel"
      label={label}
      labelColorToken={labelColorToken}
      labelTypographyToken={labelTypographyToken}
      tooltip={tooltip}
      tooltipColorToken={tooltipColorToken}
    />
    <FromToBox data-testid="FromToTokenTypography-FromToBox">
      <TokenTypography
        colorToken={fromColorToken}
        data-testid={`FromToTokenTypography-FromToBox-FromTokenTypography-${fromColorToken}-${typographyToken}`}
        prefixColorToken={fromPrefixColorToken}
        prefixToken={fromPrefixToken}
        token={fromToken}
        tokenColorToken={fromTokenColorToken}
        typographyToken={typographyToken}
        value={fromValue}
      />
      <Typography colorToken="white400" typographyToken={typographyToken}>
        ⇢
      </Typography>
      <TokenTypography
        colorToken={toColorToken}
        data-testid={`FromToTokenTypography-FromToBox-ToTokenTypography-${toColorToken}-${typographyToken}`}
        prefixColorToken={toPrefixColorToken}
        prefixToken={toPrefixToken}
        token={toToken}
        tokenColorToken={toTokenColorToken}
        typographyToken={typographyToken}
        value={toValue}
      />
      {token ? (
        <Typography
          colorToken={tokenColorToken}
          data-testid={`FromToTokenTypography-FromToBox-TokenTypography-${fromColorToken}3`}
          typographyToken="bodySmallRegular"
        >
          {token}
        </Typography>
      ) : null}
    </FromToBox>
  </FromToTokenTypographyBox>
);
