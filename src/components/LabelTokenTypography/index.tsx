import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TokenTypography } from '../TokenTypography';
import { TooltipLabel } from '../TooltipLabel';
import { LabelTokenTypographyBox } from './LabelTokenTypography.styled';

export type LabelTokenTypographyProps = {
  colorToken: ColorTokens;
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

  prefixColorToken?: ColorTokens;
  differenceColorToken?: ColorTokens;
  tokenColorToken?: ColorTokens;
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
  prefixColorToken,
  tokenColorToken,
  differenceColorToken,
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
      differenceColorToken={differenceColorToken}
      differenceToken={differenceToken}
      differenceValue={differenceValue}
      prefixColorToken={prefixColorToken}
      prefixToken={prefixToken}
      token={token}
      tokenColorToken={tokenColorToken}
      typographyToken={typographyToken}
      value={value}
      value2={value2}
    />
  </LabelTokenTypographyBox>
);
