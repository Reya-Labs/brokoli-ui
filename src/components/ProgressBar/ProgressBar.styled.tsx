import styled from '@emotion/styled';

import { createTransition } from '../../utils/createTransition';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ProgressBarPercentageBox = styled('div', shouldNotForwardProps(['width']))<{
  width: number;
}>`
  background: ${({ theme }) => theme.colors.white600};
  height: 100%;
  width: ${({ width }) => width}%;
  transition: ${createTransition({ duration: 700, properties: 'width' })};
`;

export const ProgressBarBoxContainer = styled('div')`
  width: 100%;
  background: ${({ theme }) => theme.colors.black700};
  height: 4px;
`;
