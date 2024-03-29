import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { TypographyTokens } from '../../foundation/Typography';
import { Typography } from '../Typography';
import { TypographyWithTooltip, TypographyWithTooltipProps } from '../TypographyWithTooltip';
import { AttentionIndicatorStyled } from './TooltipLabel.styled';

type TooltipLabelProps = {
  tooltip?: TypographyWithTooltipProps['tooltip'];
  label?: React.ComponentProps<typeof Typography>['children'];
  labelColorToken?: ColorTokens;
  tooltipColorToken?: ColorTokens;
  labelTypographyToken?: TypographyTokens;
  'data-testid'?: string;
  attentionIndicatorColorToken?: ColorTokens;
};
export const TooltipLabel: React.FC<TooltipLabelProps> = ({
  tooltip,
  label,
  labelColorToken,
  tooltipColorToken,
  labelTypographyToken,
  'data-testid': dataTestId,
  attentionIndicatorColorToken,
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
