import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { TooltipStyled, TypographyStyled } from './TypographyWithTooltip.styled';

export const TypographyWithTooltip: React.FunctionComponent<{
  colorToken: ColorTokens;
  typographyToken: TypographyToken;
  tooltipColorToken?: ColorTokens;
  tooltip: string;
  children: string;
}> = ({ children, tooltipColorToken, typographyToken, tooltip, colorToken }) => {
  return (
    <TypographyStyled colorToken={colorToken} typographyToken={typographyToken}>
      {children}
      <TooltipStyled colorToken={tooltipColorToken}>{tooltip}</TooltipStyled>
    </TypographyStyled>
  );
};
