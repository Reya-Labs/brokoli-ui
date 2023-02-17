import React from 'react';

import { BaseColorTokens } from '../../foundation/Colors';
import { TypographyToken } from '../Typography';
import { PercentageTypographyStyled } from './PercentageTypography.styled';

export const PercentageTypography: React.FunctionComponent<{
  colorToken: BaseColorTokens;
  value: number;
  typographyToken: TypographyToken;
}> = ({ typographyToken, value, colorToken }) => {
  return (
    <PercentageTypographyStyled colorToken={colorToken} typographyToken={typographyToken}>
      {value}
      <strong>%</strong>
    </PercentageTypographyStyled>
  );
};
