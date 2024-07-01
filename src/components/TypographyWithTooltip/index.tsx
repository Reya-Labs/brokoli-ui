import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { ExclaimTooltipProps } from '../ExclaimTooltip';
import { TypographyProps } from '../Typography';
import { TooltipStyled, TypographyStyled } from './TypographyWithTooltip.styled';

export type TypographyWithTooltipProps = React.PropsWithChildren<{
  colorToken: TypographyProps['colorToken'];
  'data-testid'?: string;
  textDecorationColorToken?: ColorTokens;
  tooltip: ExclaimTooltipProps['children'];
  tooltipColorToken?: ExclaimTooltipProps['tooltipColorToken'];
  tooltipIconColorToken?: ExclaimTooltipProps['iconColorToken'];
  tooltipTypographyToken?: ExclaimTooltipProps['tooltipTypographyToken'];
  trigger?: 'text' | 'icon';
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
  trigger = 'icon',
  textDecorationColorToken = 'white100',
}) => {
  const hasTooltip =
    typeof tooltip === 'string' && tooltip.trim().length > 0 ? true : Boolean(tooltip);
  if (trigger === 'text') {
    if (!hasTooltip) {
      return (
        <TypographyStyled
          colorToken={colorToken}
          data-testid={dataTestId}
          decorate="underline"
          textDecorationColorToken={textDecorationColorToken}
          typographyToken={typographyToken}
        >
          {children}
        </TypographyStyled>
      );
    }
    return (
      <TooltipStyled
        iconColorToken={tooltipIconColorToken}
        tooltipColorToken={tooltipColorToken}
        tooltipTypographyToken={tooltipTypographyToken}
        trigger={
          <TypographyStyled
            colorToken={colorToken}
            data-testid={dataTestId}
            decorate="underline"
            textDecorationColorToken={textDecorationColorToken}
            typographyToken={typographyToken}
          >
            {children}
          </TypographyStyled>
        }
      >
        {tooltip}
      </TooltipStyled>
    );
  }
  return (
    <TypographyStyled
      colorToken={colorToken}
      data-testid={dataTestId}
      decorate="none"
      typographyToken={typographyToken}
    >
      {children}
      {!hasTooltip ? null : (
        <TooltipStyled
          iconColorToken={tooltipIconColorToken}
          tooltipColorToken={tooltipColorToken}
          tooltipTypographyToken={tooltipTypographyToken}
        >
          {tooltip}
        </TooltipStyled>
      )}
    </TypographyStyled>
  );
};
