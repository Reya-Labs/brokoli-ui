import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { TypographyWithTooltip, TypographyWithTooltipProps } from '../TypographyWithTooltip';
import { AttentionIndicatorStyled } from './TooltipLabel.styled';

export type TooltipLabelProps = {
  attentionIndicatorColorToken?: ColorTokens;
  'data-testid'?: string;
  label?: React.ComponentProps<typeof Typography>['children'];
  labelColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  tooltip?: TypographyWithTooltipProps['tooltip'];
  tooltipColorToken?: ColorTokens;
  tooltipTrigger?: TypographyWithTooltipProps['trigger'];
};

export const TooltipLabel: React.FC<TooltipLabelProps> = ({
  tooltip,
  label,
  labelColorToken,
  tooltipColorToken,
  labelTypographyToken,
  'data-testid': dataTestId,
  attentionIndicatorColorToken,
  tooltipTrigger = 'icon',
}) => {
  if (tooltip && label && labelColorToken && labelTypographyToken) {
    return (
      <TypographyWithTooltip
        colorToken={labelColorToken}
        data-testid={dataTestId || 'TooltipLabel-TypographyWithTooltip'}
        tooltip={tooltip}
        tooltipIconColorToken={tooltipColorToken}
        trigger={tooltipTrigger}
        typographyToken={labelTypographyToken}
      >
        {attentionIndicatorColorToken ? (
          <AttentionIndicatorStyled
            className="attentionIndicator"
            colorToken={attentionIndicatorColorToken}
          />
        ) : null}
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
        {attentionIndicatorColorToken ? (
          <AttentionIndicatorStyled
            className="attentionIndicator"
            colorToken={attentionIndicatorColorToken}
          />
        ) : null}
        {label}
      </Typography>
    );
  }

  return null;
};
