import React from 'react';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { Tooltip } from '../Tooltip';
import ExclaimSvg from './exclaim.svg';
import { ExclaimBox } from './ExclaimTooltipTooltip.styled';

export type ExclaimTooltipProps = {
  colorToken?: ColorTokens;
  className?: string;
  children: string | React.ReactNode;
};

export const ExclaimTooltip: React.FunctionComponent<ExclaimTooltipProps> = ({
  className,
  colorToken = 'lavenderWeb',
  children,
}) => (
  <Tooltip
    className={className}
    trigger={
      <ExclaimBox color={getColorFromToken(colorToken)} data-testid="ExclaimBox">
        <ExclaimSvg />
      </ExclaimBox>
    }
  >
    {children}
  </Tooltip>
);
