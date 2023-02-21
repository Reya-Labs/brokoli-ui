import React from 'react';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { Typography } from '../Typography';
import { ReactComponent as ExclaimSvg } from './exclaim.svg';
import {
  FloatingUITooltip,
  FloatingUITooltipContent,
  FloatingUITooltipTrigger,
} from './FloatingUITooltip';
import { ExclaimBox, TooltipBox } from './Tooltip.styled';

export const Tooltip: React.FunctionComponent<{
  colorToken?: ColorTokens;
  className?: string;
}> = ({ className, colorToken = 'lavenderWeb', children }) => (
  <FloatingUITooltip>
    <FloatingUITooltipTrigger className={className}>
      <ExclaimBox color={getColorFromToken(colorToken)} data-testid="ExclaimBox">
        <ExclaimSvg />
      </ExclaimBox>
    </FloatingUITooltipTrigger>
    <FloatingUITooltipContent>
      <TooltipBox>
        <Typography typographyToken="primaryBodySmallRegular">{children}</Typography>
      </TooltipBox>
    </FloatingUITooltipContent>
  </FloatingUITooltip>
);
