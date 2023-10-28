import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';

export const AttentionIndicatorCircleIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
}>`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
`;
