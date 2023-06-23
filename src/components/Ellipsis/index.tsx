import React from 'react';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { EllipsisTypography } from './Ellipsis.styled';

export const Ellipsis: React.FunctionComponent<{
  colorToken?: ColorTokens;
}> = React.memo(({ colorToken }) => (
  <EllipsisTypography
    color={!colorToken ? 'inherit' : getColorFromToken(colorToken)}
    data-testid={`EllipsisTypography-${!colorToken ? 'inherit' : colorToken}`}
  />
));
