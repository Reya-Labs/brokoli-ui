import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { createTransition } from '../../utils/create-transition';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ProgressBarPercentageBox = styled(
  'div',
  shouldNotForwardProps(['barColorToken', 'width']),
)<{
  width: number;
  barColorToken: ColorTokens;
}>`
  background: ${({ theme, barColorToken }) =>
    getColorFromToken({ colorToken: barColorToken, theme })};
  height: 100%;
  width: ${({ width }) => width}%;
  transition: ${createTransition({ duration: 700, properties: 'width' })};
`;

export const ProgressBarBoxContainer = styled(
  'div',
  shouldNotForwardProps(['backgroundColorToken', 'rounded', 'height']),
)<{
  backgroundColorToken: 'transparent' | ColorTokens;
  height: number;
  rounded: boolean;
}>`
  width: 100%;
  background: ${({ backgroundColorToken, theme }) =>
    backgroundColorToken === 'transparent'
      ? 'transparent'
      : getColorFromToken({ colorToken: backgroundColorToken, theme })};
  height: ${({ height }) => height}px;
  border-radius: ${({ rounded }) => (rounded ? 8 : 0)}px;
`;
