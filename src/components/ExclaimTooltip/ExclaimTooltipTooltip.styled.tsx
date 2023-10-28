import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';

export const ExclaimBox = styled('span', {
  shouldForwardProp: (prop) => prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
}>`
  cursor: pointer;
  vertical-align: middle;
  & svg {
    width: 1em;
    height: 1em;
  }
  & g {
    stroke: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  }
`;
