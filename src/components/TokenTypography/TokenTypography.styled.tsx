import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { Typography, TypographyProps } from '../Typography';

export const TokenTypographyStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'positiveDifference',
})<
  TypographyProps & {
    positiveDifference: boolean;
  }
>`
  & > strong:nth-of-type(1) {
    font-weight: inherit;
    margin-right: 8px;
    color: ${({ colorToken }) => getColorFromToken(`${colorToken as BaseColorTokens}3`)};
  }

  & > strong:nth-of-type(3) {
    font-weight: inherit;
    color: ${({ positiveDifference }) =>
      getColorFromToken(positiveDifference ? 'skyBlueCrayola' : 'wildStrawberry')};
  }

  & > strong:nth-of-type(2),
  & > strong:nth-of-type(4) {
    font-weight: inherit;
    color: ${({ positiveDifference }) =>
      getColorFromToken(positiveDifference ? 'skyBlueCrayola3' : 'wildStrawberry3')};
  }
`;
