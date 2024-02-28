import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const CloseButtonWrapper = styled(
  'button',
  shouldNotForwardProps([
    'buttonBackgroundColorToken',
    'buttonHoverBackgroundColorToken',
    'iconColorToken',
    'iconHoverColorToken',
    'size',
  ]),
)<{
  buttonBackgroundColorToken: ColorTokens;
  buttonHoverBackgroundColorToken: ColorTokens;
  iconColorToken?: ColorTokens;
  iconHoverColorToken?: ColorTokens;
  size: number;
}>`
  display: grid;
  place-content: center;

  padding: 6px;
  background-color: ${({ theme, buttonBackgroundColorToken }) =>
    getColorFromToken({ colorToken: buttonBackgroundColorToken, theme })};
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ theme, buttonHoverBackgroundColorToken }) =>
      getColorFromToken({ colorToken: buttonHoverBackgroundColorToken, theme })};

    & * {
      stroke: ${({ theme, iconHoverColorToken }) =>
        iconHoverColorToken && getColorFromToken({ colorToken: iconHoverColorToken, theme })};
    }
  }

  & > svg {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
  }

  & * {
    stroke: ${({ theme, iconColorToken }) =>
      iconColorToken && getColorFromToken({ colorToken: iconColorToken, theme })};
  }
`;
