import React from 'react';

import { AttentionIndicatorCircleIcon } from './AttentionIndicator.styled';

export const AttentionIndicator: React.FunctionComponent = React.memo(() => (
  <AttentionIndicatorCircleIcon data-testid="AttentionIndicator" />
));
