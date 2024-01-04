import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

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

export const SkeletonBox = styled(
  'div',
  shouldNotForwardProps(['variant', 'colorToken', 'typographyToken']),
)<{
  colorToken: ColorTokens;
  variant: 'rectangular' | 'circular';
  typographyToken?: TypographyTokens;
}>`
  background-color: ${({ theme, colorToken }) =>
    getColorFromToken({ colorToken: `${colorToken}`, theme })};
  height: 1.2em;
  ${({ variant }) => (variant === 'circular' ? 'border-radius: 50%' : '')};
  ${({ theme, typographyToken }) =>
    typographyToken
      ? css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))
      : ''};
  animation: ${skeletonAnimation} 1.5s ease-in-out 0.5s infinite;
`;
