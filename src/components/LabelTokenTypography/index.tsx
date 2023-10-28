import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel } from '../TooltipLabel';
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
  tooltip?: ExclaimTooltipProps['children'];
  tooltipColorToken?: ColorTokens;
  differenceValue?: number;
  differenceToken?: string;
  attentionIndicatorColorToken?: ColorTokens;
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
  attentionIndicatorColorToken,
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
      attentionIndicatorColorToken={attentionIndicatorColorToken}
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
