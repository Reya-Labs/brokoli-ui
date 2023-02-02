import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../../foundation/Colors';

const move = keyframes`
  0% {
    left: 0;
  }

  50% {
    left: 140px;
  }

  100% {
    left: 0;
  }
`;

export const WalletConnectLoadingBox = styled('div')`
  position: relative;
  width: 150px;
  height: 23px;
`;

const GradientLayer = styled('div')`
  width: 150px;
  height: 3px;

  background: linear-gradient(90deg, #ff4aa9 0%, #fbc13a 31.47%, #4de5ff 68.91%, #2667ff 100%);
  border-radius: 20px;
  position: absolute;
  left: 0;
  top: 50%;
`;
export const WalletLoadingRect1 = styled(GradientLayer)`
  mix-blend-mode: overlay;
  z-index: 0;
`;
export const WalletLoadingRect2 = styled(GradientLayer)`
  filter: blur(1.1px);
  z-index: 1;
`;
export const WalletLoadingEllipsis = styled('div')`
  position: absolute;
  width: 10px;
  height: 3px;
  left: 0px;
  top: 50%;
  border-radius: 20px;

  background: ${colors.lavenderWeb};
  mix-blend-mode: overlay;
  filter: blur(1.25px);
  backdrop-filter: blur(1.2px);
  z-index: 2;

  animation: ${move} 1800ms linear infinite;
`;
