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

export type TooltipProps = {
  colorToken?: ColorTokens;
  className?: string;
  children: string | React.ReactNode;
};

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  className,
  colorToken = 'lavenderWeb',
  children,
}) => (
  <FloatingUITooltip>
    <FloatingUITooltipTrigger className={className}>
      <ExclaimBox color={getColorFromToken(colorToken)} data-testid="ExclaimBox">
        <ExclaimSvg />
      </ExclaimBox>
    </FloatingUITooltipTrigger>
    <FloatingUITooltipContent>
      <TooltipBox limitWidth={typeof children === 'string'}>
        <Typography colorToken="lavenderWeb" typographyToken="primaryBodySmallRegular">
          {children}
        </Typography>
      </TooltipBox>
    </FloatingUITooltipContent>
  </FloatingUITooltip>
);
