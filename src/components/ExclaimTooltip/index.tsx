import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Tooltip } from '../Tooltip';
import { ReactComponent as ExclaimSvg } from './exclaim.svg';
import { ExclaimBox } from './ExclaimTooltipTooltip.styled';

export type ExclaimTooltipProps = {
  children: string | React.ReactNode;
  className?: string;
  iconColorToken?: ColorTokens;
  tooltipColorToken?: ColorTokens;
  tooltipTypographyToken?: TypographyTokens;
  trigger?: React.ReactNode;
};

export const ExclaimTooltip: React.FunctionComponent<ExclaimTooltipProps> = ({
  className,
  iconColorToken = 'white100',
  children,
  tooltipColorToken = 'white100',
  tooltipTypographyToken = 'bodySmallMedium',
  trigger,
}) => (
  <Tooltip
    className={className}
    colorToken={tooltipColorToken}
    trigger={
      trigger ? (
        trigger
      ) : (
        <ExclaimBox colorToken={iconColorToken} data-testid="ExclaimBox">
          <ExclaimSvg />
        </ExclaimBox>
      )
    }
    typographyToken={tooltipTypographyToken}
  >
    {children}
  </Tooltip>
);
