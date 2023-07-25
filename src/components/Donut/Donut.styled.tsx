import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors, ColorTokens, getColorFromToken } from '../../foundation/Colors';

const animate = (percentage: number) => keyframes`
  100% {
    --angle: ${percentage * 3.6}deg;
  }
`;

export const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'percentage' && prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
  percentage: number;
}>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: rotate(90deg);

  background: ${({ colorToken }) => `conic-gradient(
    ${getColorFromToken(colorToken)} 0deg var(--angle),
    ${colors.lavenderWeb5} var(--angle) 360deg
  )`};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  animation: ${({ percentage }) => animate(percentage)} 700ms ease-out forwards;

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
`;

export const Hole = styled('div', {
  shouldForwardProp: (prop) => prop !== 'colorToken',
})<{
  colorToken: ColorTokens;
}>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ colorToken }) => getColorFromToken(colorToken)};
`;
