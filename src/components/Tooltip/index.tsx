import React from 'react';

import { Typography } from '../Typography';
import {
  FloatingUITooltip,
  FloatingUITooltipContent,
  FloatingUITooltipTrigger,
} from './FloatingUITooltip';
import { TooltipBox, TriggerBox } from './Tooltip.styled';

export type TooltipProps = {
  children: string | React.ReactNode;
  className?: string;
  trigger: string | React.ReactNode;
};

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  className,
  trigger,
  children,
}) => (
  <FloatingUITooltip>
    <FloatingUITooltipTrigger className={className}>
      <TriggerBox>{trigger}</TriggerBox>
    </FloatingUITooltipTrigger>
    <FloatingUITooltipContent>
      <TooltipBox limitWidth={typeof children === 'string'}>
        <Typography colorToken="white100" typographyToken="bodySmallMedium">
          {children}
        </Typography>
      </TooltipBox>
    </FloatingUITooltipContent>
  </FloatingUITooltip>
);
