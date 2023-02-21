import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { Typography, TypographyToken } from '../Typography';
import { LabelTokenTypographyBox } from './LabelTokenTypography.styled';

export const LabelTokenTypography: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  value: string;
  typographyToken: TypographyToken;
  token: string;
  label: string;
  labelColorToken: ColorTokens;
  labelTypographyToken: TypographyToken;
}> = ({
  label,
  labelTypographyToken,
  labelColorToken,
  token,
  typographyToken,
  value,
  colorToken,
}) => (
  <LabelTokenTypographyBox>
    <Typography colorToken={labelColorToken} typographyToken={labelTypographyToken}>
      {label}
    </Typography>
    <TokenTypography
      colorToken={colorToken}
      token={token}
      typographyToken={typographyToken}
      value={value}
    />
  </LabelTokenTypographyBox>
);
