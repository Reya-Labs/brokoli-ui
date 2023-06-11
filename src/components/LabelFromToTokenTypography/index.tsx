import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TooltipProps } from '../ExclaimTooltip';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel } from '../TooltipLabel';
import { Typography, TypographyToken } from '../Typography';
import { FromToBox, LabelFromToTokenTypographyBox } from './LabelFromToTokenTypography.styled';

export type LabelFromToTokenTypographyProps = {
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
  label: string;
  labelColorToken: ColorTokens;
  labelTypographyToken: TypographyToken;
  tooltip?: TooltipProps['children'];
  tooltipColorToken?: ColorTokens;
};

export const LabelFromToTokenTypography: React.FunctionComponent<LabelFromToTokenTypographyProps> =
  ({
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
    <LabelFromToTokenTypographyBox data-testid="LabelFromToTokenTypography-LabelFromToTokenTypographyBox">
      <TooltipLabel
        data-testid="LabelFromToTokenTypography-TooltipLabel"
        label={label}
        labelColorToken={labelColorToken}
        labelTypographyToken={labelTypographyToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
      />
      <FromToBox data-testid="LabelFromToTokenTypography-FromToBox">
        <TokenTypography
          colorToken={fromColorToken}
          data-testid={`LabelFromToTokenTypography-FromToBox-FromTokenTypography-${fromColorToken}-${typographyToken}`}
          prefixToken={fromPrefixToken}
          token={fromToken}
          typographyToken={typographyToken}
          value={fromValue}
        />
        <Typography colorToken="lavenderWeb3" typographyToken={typographyToken}>
          ⇢
        </Typography>
        <TokenTypography
          colorToken={toColorToken}
          data-testid={`LabelFromToTokenTypography-FromToBox-ToTokenTypography-${toColorToken}-${typographyToken}`}
          prefixToken={toPrefixToken}
          token={toToken}
          typographyToken={typographyToken}
          value={toValue}
        />
        {token ? (
          <Typography
            colorToken={`${fromColorToken}3`}
            data-testid={`LabelFromToTokenTypography-FromToBox-TokenTypography-${fromColorToken}3`}
            typographyToken="secondaryBodySmallRegular"
          >
            {token}
          </Typography>
        ) : null}
      </FromToBox>
    </LabelFromToTokenTypographyBox>
  );
