import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { AttentionIndicatorCircleIcon } from './AttentionIndicator.styled';

export type AttentionIndicatorProps = {
  className?: string;
  colorToken: ColorTokens;
};

export const AttentionIndicator: React.FunctionComponent<AttentionIndicatorProps> = React.memo(
  ({ colorToken, className }) => (
    <AttentionIndicatorCircleIcon
      className={className}
      colorToken={colorToken}
      data-testid={`AttentionIndicator-${colorToken}`}
    />
  ),
);
