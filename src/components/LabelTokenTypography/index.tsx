import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { TooltipProps } from '../Tooltip';
import { TooltipLabel } from '../TooltipLabel';
import { TypographyToken } from '../Typography';
import { LabelTokenTypographyBox } from './LabelTokenTypography.styled';

export type LabelTokenTypographyProps = {
  colorToken: BaseColorTokens;
  value: string | number;
  value2?: string | number;
  typographyToken: TypographyToken;
  token: string;
  prefixToken?: string;
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
  prefixToken,
}) => (
  <LabelTokenTypographyBox data-testid="LabelTokenTypography-LabelTokenTypographyBox">
    <TooltipLabel
      data-testid="LabelTokenTypography-TooltipLabel"
      label={label}
      labelColorToken={labelColorToken}
      labelTypographyToken={labelTypographyToken}
      tooltip={tooltip}
      tooltipColorToken={tooltipColorToken}
    />
    <TokenTypography
      colorToken={colorToken}
      data-testid="LabelTokenTypography-TokenTypography"
      differenceToken={differenceToken}
      differenceValue={differenceValue}
      prefixToken={prefixToken}
      token={token}
      typographyToken={typographyToken}
      value={value}
      value2={value2}
    />
  </LabelTokenTypographyBox>
);
