import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { AttentionIndicatorCircleIcon } from './AttentionIndicator.styled';

export type AttentionIndicatorProps = {
  colorToken: ColorTokens;
};

export const AttentionIndicator: React.FunctionComponent<AttentionIndicatorProps> = React.memo(
  ({ colorToken }) => (
    <AttentionIndicatorCircleIcon
      colorToken={colorToken}
      data-testid={`AttentionIndicator-${colorToken}`}
    />
  ),
);
