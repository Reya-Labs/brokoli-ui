import React from 'react';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { EllipsisTypography } from './Ellipsis.styled';

export const Ellipsis: React.FunctionComponent<{
  colorToken?: ColorTokens;
}> = React.memo(({ colorToken }) => {
  return (
    <EllipsisTypography color={getColorFromToken(colorToken)} data-testid="EllipsisTypography" />
  );
});
