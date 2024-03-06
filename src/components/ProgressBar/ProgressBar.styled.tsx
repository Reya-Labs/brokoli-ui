import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ProgressBarPercentageBox = styled('div', shouldNotForwardProps(['width']))<{
  width: number;
}>`
  background: ${({ theme }) => theme.colors.white600};
  height: 100%;
  width: ${({ width }) => width}%;
  transition: width 700ms ease-in;
`;

export const ProgressBarBoxContainer = styled('div')`
  width: 100%;
  background: ${({ theme }) => theme.colors.black700};
  height: 4px;
`;
