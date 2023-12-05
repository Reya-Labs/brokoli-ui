import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel } from '../TooltipLabel';
import { Typography } from '../Typography';
import { FromToBox, FromToTokenTypographyBox } from './FromToTokenTypography.styled';

export type FromToTokenTypographyProps = {
  fromColorToken: BaseColorTokens;
  fromValue: string | number;
  fromToken?: string;
  fromPrefixToken?: string;
  toColorToken: BaseColorTokens;
  toValue: string | number;
  toToken?: string;
  toPrefixToken?: string;
  typographyToken: TypographyToken;
  token?: string;
  label?: string;
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
};

export const FromToTokenTypography: React.FunctionComponent<FromToTokenTypographyProps> = ({
  fromColorToken,
  fromValue,
  fromToken = '',
  fromPrefixToken = '',
  toColorToken,
  toValue,
  toToken = '',
  toPrefixToken = '',
  typographyToken,
  token = '',
  label,
  labelColorToken,
  labelTypographyToken,
  tooltip,
  tooltipColorToken,
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
        prefixToken={fromPrefixToken}
        token={fromToken}
        typographyToken={typographyToken}
        value={fromValue}
      />
      <Typography colorToken="white400" typographyToken={typographyToken}>
        ⇢
      </Typography>
      <TokenTypography
        colorToken={toColorToken}
        data-testid={`FromToTokenTypography-FromToBox-ToTokenTypography-${toColorToken}-${typographyToken}`}
        prefixToken={toPrefixToken}
        token={toToken}
        typographyToken={typographyToken}
        value={toValue}
      />
      {token ? (
        <Typography
          colorToken={`${fromColorToken}400`}
          data-testid={`FromToTokenTypography-FromToBox-TokenTypography-${fromColorToken}3`}
          typographyToken="bodySmallRegular"
        >
          {token}
        </Typography>
      ) : null}
    </FromToBox>
  </FromToTokenTypographyBox>
);
