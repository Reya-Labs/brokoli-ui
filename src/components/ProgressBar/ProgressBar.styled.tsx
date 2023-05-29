import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

const grow = (percentage: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${percentage}%;
  }
`;

export const ProgressBarPercentageBox = styled('div')<{ percentage: number }>`
  width: 0;
  background: ${colors.lavenderWeb};
  height: 100%;
  animation: ${({ percentage }) => grow(percentage)} 700ms ease-out forwards;
`;

export const ProgressBarBoxContainer = styled('div')`
  width: 100%;
  background: ${colors.lavenderWeb3};
  height: 4px;
  margin-top: 4px;
`;
