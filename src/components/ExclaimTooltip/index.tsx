import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { Tooltip } from '../Tooltip';
import { ReactComponent as ExclaimSvg } from './exclaim.svg';
import { ExclaimBox } from './ExclaimTooltipTooltip.styled';

export type ExclaimTooltipProps = {
  children: string | React.ReactNode;
  className?: string;
  colorToken?: ColorTokens;
};

export const ExclaimTooltip: React.FunctionComponent<ExclaimTooltipProps> = ({
  className,
  colorToken = 'white100',
  children,
}) => (
  <Tooltip
    className={className}
    trigger={
      <ExclaimBox colorToken={colorToken} data-testid="ExclaimBox">
        <ExclaimSvg />
      </ExclaimBox>
    }
  >
    {children}
  </Tooltip>
);
