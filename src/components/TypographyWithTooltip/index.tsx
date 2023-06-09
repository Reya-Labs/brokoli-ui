import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TooltipProps } from '../ExclaimTooltip';
import { TypographyProps } from '../Typography';
import { TooltipStyled, TypographyStyled } from './TypographyWithTooltip.styled';

export type TypographyWithTooltipProps = {
  colorToken: TypographyProps['colorToken'];
  typographyToken: TypographyProps['typographyToken'];
  tooltipColorToken?: ColorTokens;
  tooltip: TooltipProps['children'];
  'data-testid'?: string;
};

export const TypographyWithTooltip: React.FunctionComponent<TypographyWithTooltipProps> = ({
  children,
  tooltipColorToken,
  typographyToken,
  tooltip,
  colorToken,
  'data-testid': dataTestId,
}) => {
  return (
    <TypographyStyled
      colorToken={colorToken}
      data-testid={dataTestId}
      typographyToken={typographyToken}
    >
      {children}
      <TooltipStyled colorToken={tooltipColorToken}>{tooltip}</TooltipStyled>
    </TypographyStyled>
  );
};
