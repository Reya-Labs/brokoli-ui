import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { TooltipProps } from '../Tooltip';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { LabelTokenTypographyBox } from './LabelTokenTypography.styled';

export type LabelTokenTypographyProps = {
  colorToken: BaseColorTokens;
  value: string | number;
  value2?: string | number;
  typographyToken: TypographyToken;
  token: string;
  label: string;
  labelColorToken: ColorTokens;
  labelTypographyToken: TypographyToken;
  tooltip?: TooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  differenceValue?: number;
  differenceToken?: string;
};

export const LabelTokenTypography: React.FunctionComponent<LabelTokenTypographyProps> = ({
  label,
  labelTypographyToken,
  labelColorToken,
  token,
  typographyToken,
  value,
  colorToken,
  tooltip,
  tooltipColorToken,
  differenceValue,
  value2,
  differenceToken,
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
      differenceToken={differenceToken}
      differenceValue={differenceValue}
      token={token}
      typographyToken={typographyToken}
      value={value}
      value2={value2}
    />
  </LabelTokenTypographyBox>
);
