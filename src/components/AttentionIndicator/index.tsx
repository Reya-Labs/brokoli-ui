import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { AttentionIndicatorCircleIcon } from './AttentionIndicator.styled';

export type AttentionIndicatorProps = {
  colorToken: ColorTokens;
  className?: string;
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
