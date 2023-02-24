import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { Typography } from '../Typography';
const ELLIPSE_WIDTH = 10;

const move = (width: number, ellipseWidth: number) => keyframes`
  0% {
    left: 0;
  }

  50% {
    left: ${width - ellipseWidth}px;
  }

  100% {
    left: 0;
  }
`;

export const LoadingBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width',
})<{
  width: number;
}>`
  position: relative;
  width: ${({ width }) => width}px;
  display: flex;
  align-items: center;
`;

const GradientLayer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background: linear-gradient(90deg, #ff4aa9 0%, #fbc13a 31.47%, #4de5ff 68.91%, #2667ff 100%);
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
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})<{
  width: number;
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

  animation: ${({ width }) => move(width, ELLIPSE_WIDTH)} 1800ms linear infinite;
`;

export const RainbowLoaderBox = styled('div')`
  text-align: center;
  display: inline-block;
`;

export const RainbowText = styled(Typography)`
  margin-bottom: 4px;
`;
