import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
  background: ${({ theme }) => theme.colors.lavenderWeb};
  height: 100%;
  animation: ${({ percentage }) => grow(percentage)} 700ms ease-out forwards;
`;

export const ProgressBarBoxContainer = styled('div')`
  width: 100%;
  background: ${({ theme }) => theme.colors.lavenderWeb3};
  height: 4px;
`;
