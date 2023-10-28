import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { gradients } from '../../foundation/Gradients';
import { Typography } from '../Typography';
const ELLIPSE_WIDTH = 10;

const move = (ellipseWidth: number) => keyframes`
  0% {
    left: 0;
  }

  50% {
    left: calc(100% - ${ellipseWidth}px);
  }

  100% {
    left: 0;
  }
`;

export const LoadingBox = styled('div')`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const GradientLayer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'height',
})<{
  height: number;
}>`
  width: 100%;
  height: ${({ height }) => height}px;

  background: ${gradients.rainbow};
  border-radius: 20px;
  position: absolute;
  left: 0;
  top: 50%;
`;

export const LoadingRect1 = styled(GradientLayer)`
  mix-blend-mode: overlay;
  z-index: 0;
`;

export const LoadingRect2 = styled(GradientLayer)`
  filter: blur(1.1px);
  z-index: 1;
`;

export const LoadingEllipsis = styled('div', {
  shouldForwardProp: (prop) => prop !== 'height',
})<{
  height: number;
}>`
  position: absolute;
  width: ${ELLIPSE_WIDTH}px;
  height: ${({ height }) => height}px;
  left: 0px;
  top: 50%;
  border-radius: 20px;

  background: ${colors.lavenderWeb};
  mix-blend-mode: overlay;
  filter: blur(1.25px);
  backdrop-filter: blur(1.2px);
  z-index: 2;

  animation: ${move(ELLIPSE_WIDTH)} 1800ms ease-in-out infinite;
`;

export const RainbowLoaderBox = styled('div')`
  text-align: center;
  display: inline-block;
  width: 100%;
`;

export const RainbowText = styled(Typography)`
  margin-bottom: 4px;
`;
