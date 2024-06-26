import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel, TooltipLabelProps } from '../TooltipLabel';
import { Typography } from '../Typography';
import { FromToBox, FromToTokenTypographyBox } from './FromToTokenTypography.styled';

export type FromToTokenTypographyProps = {
  fromColorToken: ColorTokens;
  fromPrefixColorToken?: ColorTokens;
  fromPrefixToken?: string;
  fromToken?: string;
  fromTokenColorToken?: ColorTokens;
  fromValue: string | number;
  label?: string;
  labelAttentionIndicatorColorToken?: ColorTokens;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  toColorToken: ColorTokens;
  toPrefixColorToken?: ColorTokens;
  toPrefixToken?: string;
  toToken?: string;
  toTokenColorToken?: ColorTokens;
  toValue: string | number;
  token?: string;
  tokenColorToken?: ColorTokens;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  tooltipTrigger?: TooltipLabelProps['tooltipTrigger'];
  typographyToken: TypographyTokens;
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
  labelAttentionIndicatorColorToken,
  tooltipTrigger = 'icon',
}) => (
  <FromToTokenTypographyBox data-testid="FromToTokenTypography-FromToTokenTypographyBox">
    <TooltipLabel
      attentionIndicatorColorToken={labelAttentionIndicatorColorToken}
      data-testid="FromToTokenTypography-TooltipLabel"
      label={label}
      labelColorToken={labelColorToken}
      labelTypographyToken={labelTypographyToken}
      tooltip={tooltip}
      tooltipColorToken={tooltipColorToken}
      tooltipTrigger={tooltipTrigger}
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
          typographyToken="bodySmallMedium"
        >
          {token}
        </Typography>
      ) : null}
    </FromToBox>
  </FromToTokenTypographyBox>
);
