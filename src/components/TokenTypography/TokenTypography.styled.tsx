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
  & > .token {
    font-weight: inherit;
    margin-right: 8px;
    color: ${({ colorToken }) => getColorFromToken(`${colorToken as BaseColorTokens}3`)};
  }

  & > .difference-value {
    font-weight: inherit;
    color: ${({ positiveDifference }) =>
      getColorFromToken(positiveDifference ? 'skyBlueCrayola' : 'wildStrawberry')};
  }

  & > .difference-arrow,
  & > .difference-token {
    font-weight: inherit;
    color: ${({ positiveDifference }) =>
      getColorFromToken(positiveDifference ? 'skyBlueCrayola3' : 'wildStrawberry3')};
  }
`;
