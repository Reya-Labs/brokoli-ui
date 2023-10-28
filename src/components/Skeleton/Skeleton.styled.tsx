import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { TypographyToken } from '../../foundation/Typography';

const skeletonAnimation = keyframes`
  0% {
    opacity:1;
  }
  
  50%{
    opacity:0.4;
  }
  
  100%{
    opacity:1;
  }
`;

export const SkeletonBox = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'variant' && prop !== 'colorToken' && prop !== 'typographyToken',
})<{
  colorToken: ColorTokens;
  variant: 'rectangular' | 'circular';
  typographyToken?: TypographyToken;
}>`
  background-color: ${({ theme, colorToken }) =>
    getColorFromToken({ colorToken: `${colorToken}`, theme })};
  height: 1.2em;
  ${({ variant }) => (variant === 'circular' ? 'border-radius: 50%' : '')};
  ${({ theme, typographyToken }) =>
    typographyToken ? css(theme.typography[typographyToken].styleObject) : ''};
  animation: ${skeletonAnimation} 1.5s ease-in-out 0.5s infinite;
`;
