import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { FromToBox, LabelFromToTokenTypographyBox } from './LabelFromToTokenTypography.styled';

export type FromToTokenTypographyProps = {
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
  tooltip?: string;
  tooltipColorToken?: ColorTokens;
};

export const FromToTokenTypography: React.FunctionComponent<FromToTokenTypographyProps> = ({
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
  <LabelFromToTokenTypographyBox>
    {!tooltip ? (
      <Typography colorToken={labelColorToken} typographyToken={labelTypographyToken}>
        {label}
      </Typography>
    ) : (
      <TypographyWithTooltip
        colorToken={labelColorToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
        typographyToken={labelTypographyToken}
      >
        {label}
      </TypographyWithTooltip>
    )}

    <FromToBox>
      <TokenTypography
        colorToken={fromColorToken}
        token={fromToken}
        typographyToken={typographyToken}
        value={fromValue}
      />
      <strong>⇢</strong>
      <TokenTypography
        colorToken={toColorToken}
        token={toToken}
        typographyToken={typographyToken}
        value={toValue}
      />
      {token ? (
        <Typography colorToken={`${fromColorToken}3`} typographyToken="secondaryBodySmallRegular">
          {token}
        </Typography>
      ) : null}
    </FromToBox>
  </LabelFromToTokenTypographyBox>
);
