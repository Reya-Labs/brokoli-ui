import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const CloseButtonWrapper = styled(
  'button',
  shouldNotForwardProps(['colorToken, backgroundColorToken, hoverColorToken, size']),
)<{
  backgroundColorToken: ColorTokens;
  hoverBackgroundColorToken: ColorTokens;
  size: number;
}>`
  display: grid;
  place-content: center;

  padding: 6px;
  background-color: ${({ theme, backgroundColorToken }) =>
    getColorFromToken({ colorToken: backgroundColorToken, theme })};
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ theme, hoverBackgroundColorToken }) =>
      getColorFromToken({ colorToken: hoverBackgroundColorToken, theme })};
  }

  & > svg {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
  }
`;
