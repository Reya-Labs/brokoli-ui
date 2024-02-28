import styled from '@emotion/styled';

import { BaseColorTokens, ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const CloseButtonWrapper = styled(
  'button',
  shouldNotForwardProps(['colorToken, backgroundColorToken, hoverColorToken, size']),
)<{
  colorToken: BaseColorTokens;
  backgroundColorToken?: ColorTokens;
  hoverBackgroundColorToken?: ColorTokens;
  size: number;
}>`
  display: grid;
  place-content: center;

  padding: 6px;
  background-color: ${({ theme, backgroundColorToken, colorToken }) =>
    backgroundColorToken
      ? theme.colors[backgroundColorToken]
      : getColorFromToken({ colorToken: `${colorToken}900`, theme })};
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ theme, hoverBackgroundColorToken, colorToken }) =>
      hoverBackgroundColorToken
        ? theme.colors[hoverBackgroundColorToken]
        : getColorFromToken({ colorToken: `${colorToken}800`, theme })};
  }

  & > svg {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
  }
`;
