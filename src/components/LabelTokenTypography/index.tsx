import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { LabelTokenTypographyBox } from './LabelTokenTypography.styled';

export const LabelTokenTypography: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  value: string;
  typographyToken: TypographyToken;
  token: string;
  label: string;
  labelColorToken: ColorTokens;
  labelTypographyToken: TypographyToken;
  tooltip?: string;
  tooltipColorToken?: ColorTokens;
}> = ({
  label,
  labelTypographyToken,
  labelColorToken,
  token,
  typographyToken,
  value,
  colorToken,
  tooltip,
  tooltipColorToken,
}) => (
  <LabelTokenTypographyBox>
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

    <TokenTypography
      colorToken={colorToken}
      token={token}
      typographyToken={typographyToken}
      value={value}
    />
  </LabelTokenTypographyBox>
);
