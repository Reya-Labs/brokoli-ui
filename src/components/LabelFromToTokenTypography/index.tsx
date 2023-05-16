import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { TooltipProps } from '../Tooltip';
import { TooltipLabel } from '../TooltipLabel';
import { Typography, TypographyToken } from '../Typography';
import { FromToBox, LabelFromToTokenTypographyBox } from './LabelFromToTokenTypography.styled';

export type LabelFromToTokenTypographyProps = {
  fromColorToken: BaseColorTokens;
  fromValue: string | number;
  fromToken?: string;
  toColorToken: BaseColorTokens;
  toValue: string | number;
  toToken?: string;
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
    toColorToken,
    toValue,
    toToken = '',
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
          token={fromToken}
          typographyToken={typographyToken}
          value={fromValue}
        />
        <strong>⇢</strong>
        <TokenTypography
          colorToken={toColorToken}
          data-testid={`LabelFromToTokenTypography-FromToBox-ToTokenTypography-${toColorToken}-${typographyToken}`}
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
