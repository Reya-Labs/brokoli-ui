import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { AttentionIndicatorCircleIcon } from './AttentionIndicator.styled';

export type AttentionIndicatorProps = {
  className?: string;
  colorToken: ColorTokens;
  'data-testid'?: string;
};

export const AttentionIndicator: React.FunctionComponent<AttentionIndicatorProps> = React.memo(
  ({ 'data-testid': dataTestId, colorToken, className }) => (
    <AttentionIndicatorCircleIcon
      className={className}
      colorToken={colorToken}
      data-testid={dataTestId || `AttentionIndicator-${colorToken}`}
    />
  ),
);
