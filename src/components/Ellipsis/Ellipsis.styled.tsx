import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';

const ellipsisAnimation = keyframes`
  0% {
    content: '.  ';
  }
  33% {
    content: '.. ';
  }
  66% {
    content: '...';
  }
`;

export const EllipsisTypography = styled('span', {
  shouldForwardProp: (prop) => prop !== 'colorToken',
})<{
  colorToken?: ColorTokens;
}>`
  color: ${({ theme, colorToken }) =>
    !colorToken ? 'inherit' : getColorFromToken({ colorToken, theme })};
  :after {
    animation: ${ellipsisAnimation} 900ms infinite ease-in-out;
    content: '.  ';
  }
`;
