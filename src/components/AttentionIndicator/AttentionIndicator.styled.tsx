import styled from '@emotion/styled';

import { colors, ColorTokens } from '../../foundation/Colors';

export const AttentionIndicatorCircleIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
}>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ colorToken }) => colors[colorToken]};
`;
