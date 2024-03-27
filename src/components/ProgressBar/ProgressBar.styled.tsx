import styled from '@emotion/styled';

import { addAlpha, ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { createTransition } from '../../utils/create-transition';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ProgressBarPercentageBox = styled(
  'div',
  shouldNotForwardProps(['barColorToken', 'rounded', 'width', 'height']),
)<{
  width: number;
  height: number;
  barColorToken: ColorTokens;
  rounded: boolean;
}>`
  background: ${({ theme, barColorToken }) =>
    getColorFromToken({ colorToken: barColorToken, theme })};
  box-shadow: 0px 0px ${({ height }) => height + 2}px 0px
    ${({ theme, barColorToken }) =>
      addAlpha(getColorFromToken({ colorToken: barColorToken, theme }), 0.5)};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}%;
  border-radius: ${({ rounded }) => (rounded ? 8 : 0)}px;
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
