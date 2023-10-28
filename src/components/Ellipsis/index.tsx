import React from 'react';

import { ColorTokens } from '../../foundation/Colors';
import { EllipsisTypography } from './Ellipsis.styled';

export const Ellipsis: React.FunctionComponent<{
  colorToken?: ColorTokens;
}> = React.memo(({ colorToken }) => (
  <EllipsisTypography
    colorToken={colorToken}
    data-testid={`EllipsisTypography-${!colorToken ? 'inherit' : colorToken}`}
  />
));
