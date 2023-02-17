import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Tooltip } from '../Tooltip';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltipBox } from './TypographyWithTooltip.styled';

export const TypographyWithTooltip: React.FunctionComponent<{
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
  tooltipColorToken?: ColorTokens;
  tooltip: string;
  children: string;
}> = ({ children, tooltipColorToken, typographyToken, tooltip, colorToken }) => {
  return (
    <TypographyWithTooltipBox>
      <Typography colorToken={colorToken} typographyToken={typographyToken}>
        {children}
      </Typography>
      <Tooltip colorToken={tooltipColorToken}>{tooltip}</Tooltip>
    </TypographyWithTooltipBox>
  );
};
