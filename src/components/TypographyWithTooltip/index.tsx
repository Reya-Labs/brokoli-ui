import React from 'react';

import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TypographyProps } from '../Typography';
import { TooltipStyled, TypographyStyled } from './TypographyWithTooltip.styled';

export type TypographyWithTooltipProps = React.PropsWithChildren<{
  colorToken: TypographyProps['colorToken'];
  'data-testid'?: string;
  tooltip: ExclaimTooltipProps['children'];
  tooltipColorToken?: ExclaimTooltipProps['tooltipColorToken'];
  tooltipIconColorToken?: ExclaimTooltipProps['iconColorToken'];
  tooltipTypographyToken?: ExclaimTooltipProps['tooltipTypographyToken'];
  typographyToken: TypographyProps['typographyToken'];
}>;

export const TypographyWithTooltip: React.FunctionComponent<TypographyWithTooltipProps> = ({
  children,
  tooltipIconColorToken,
  typographyToken,
  tooltip,
  colorToken,
  'data-testid': dataTestId,
  tooltipColorToken,
  tooltipTypographyToken,
}) => {
  return (
    <TypographyStyled
      colorToken={colorToken}
      data-testid={dataTestId}
      typographyToken={typographyToken}
    >
      {children}
      <TooltipStyled
        iconColorToken={tooltipIconColorToken}
        tooltipColorToken={tooltipColorToken}
        tooltipTypographyToken={tooltipTypographyToken}
      >
        {tooltip}
      </TooltipStyled>
    </TypographyStyled>
  );
};
