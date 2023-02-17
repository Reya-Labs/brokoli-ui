import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { Typography, TypographyProps } from '../Typography';

export const PercentageTypographyStyled = styled(Typography)<TypographyProps>`
  & > strong {
    font-weight: inherit;
    color: ${({ colorToken }) => getColorFromToken(`${colorToken as BaseColorTokens}3`)};
  }
`;
