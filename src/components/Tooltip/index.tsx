import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
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
  colorToken?: ColorTokens;
  trigger: string | React.ReactNode;
  typographyToken?: TypographyTokens;
};

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  className,
  trigger,
  children,
  typographyToken = 'bodySmallMedium',
  colorToken = 'white100',
}) => (
  <FloatingUITooltip>
    <FloatingUITooltipTrigger className={className}>
      <TriggerBox>{trigger}</TriggerBox>
    </FloatingUITooltipTrigger>
    <FloatingUITooltipContent>
      <TooltipBox limitWidth={typeof children === 'string'}>
        <Typography colorToken={colorToken} typographyToken={typographyToken}>
          {children}
        </Typography>
      </TooltipBox>
    </FloatingUITooltipContent>
  </FloatingUITooltip>
);
