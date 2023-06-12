import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

const bounce = keyframes`
  0%,
  20% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -5px);
    background: ${colors.skyBlueCrayola3};
  }
  80%,
  100% {
    transform: translate(0, 0);
  }
`;

export const Container = styled('div')`
  position: relative;
  height: 9px;
  display: flex;
  align-items: flex-end;

  & i {
    height: 2px;
    width: 2px;
    float: left;
    margin: 0 2px;
    background: ${colors.lavenderWeb3};
  }
  i:nth-of-type(1) {
    z-index: 1;
    animation: ${bounce} 700ms infinite ease-in-out;
  }
  i:nth-of-type(2) {
    animation: ${bounce} 700ms infinite ease-in-out;
    animation-delay: 125ms;
  }
  i:nth-of-type(3) {
    animation: ${bounce} 700ms infinite ease-in-out;
    animation-delay: 250ms;
  }
`;
