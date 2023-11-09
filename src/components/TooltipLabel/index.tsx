import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { TypographyWithTooltip, TypographyWithTooltipProps } from '../TypographyWithTooltip';

type TooltipLabelProps = {
  tooltip?: TypographyWithTooltipProps['tooltip'];
  label?: React.ComponentProps<typeof Typography>['children'];
  labelColorToken?: ColorTokens;
  tooltipColorToken?: ColorTokens;
  labelTypographyToken?: TypographyToken;
  'data-testid'?: string;
};
export const TooltipLabel: React.FC<TooltipLabelProps> = ({
  tooltip,
  label,
  labelColorToken,
  tooltipColorToken,
  labelTypographyToken,
  'data-testid': dataTestId,
}) => {
  if (tooltip && label && labelColorToken && labelTypographyToken) {
    return (
      <TypographyWithTooltip
        colorToken={labelColorToken}
        data-testid={dataTestId || 'TooltipLabel-TypographyWithTooltip'}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
        typographyToken={labelTypographyToken}
      >
        {label}
      </TypographyWithTooltip>
    );
  }

  if (label && labelColorToken && labelTypographyToken) {
    return (
      <Typography
        colorToken={labelColorToken}
        data-testid={dataTestId || 'TooltipLabel-Typography'}
        typographyToken={labelTypographyToken}
      >
        {label}
      </Typography>
    );
  }

  return null;
};
