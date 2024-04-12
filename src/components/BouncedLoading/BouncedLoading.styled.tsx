import { keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

const bounce = (theme: Theme, highlightColorToken: ColorTokens) => keyframes`
  0%,
  20% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -5px);
    background: ${getColorFromToken({ colorToken: highlightColorToken, theme })};
  }
  80%,
  100% {
    transform: translate(0, 0);
  }
`;

export const Container = styled(
  'div',
  shouldNotForwardProps(['highlightColorToken', 'colorToken']),
)<{
  colorToken: ColorTokens;
  highlightColorToken: ColorTokens;
}>`
  position: relative;
  height: 9px;
  display: flex;
  align-items: flex-end;

  & i {
    height: 2px;
    width: 2px;
    float: left;
    margin: 0 2px;
    background: ${({ theme, colorToken }) => getColorFromToken({ colorToken, theme })};
  }
  i:nth-of-type(1) {
    z-index: 1;
    animation: ${({ theme, highlightColorToken }) => bounce(theme, highlightColorToken)} 700ms
      infinite ease-in-out;
  }
  i:nth-of-type(2) {
    animation: ${({ theme, highlightColorToken }) => bounce(theme, highlightColorToken)} 700ms
      infinite ease-in-out;
    animation-delay: 125ms;
  }
  i:nth-of-type(3) {
    animation: ${({ theme, highlightColorToken }) => bounce(theme, highlightColorToken)} 700ms
      infinite ease-in-out;
    animation-delay: 250ms;
  }
`;
