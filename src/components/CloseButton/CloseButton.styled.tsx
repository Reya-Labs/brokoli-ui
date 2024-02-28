import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const CloseButtonWrapper = styled(
  'button',
  shouldNotForwardProps([
    'buttonBackgroundColor',
    'buttonHoverBackgroundColor',
    'iconColor',
    'iconHoverColor',
    'size',
  ]),
)<{
  buttonBackgroundColor: ColorTokens;
  buttonHoverBackgroundColor: ColorTokens;
  iconColor?: ColorTokens;
  iconHoverColor?: ColorTokens;
  size: number;
}>`
  display: grid;
  place-content: center;

  padding: 6px;
  background-color: ${({ theme, buttonBackgroundColor }) =>
    getColorFromToken({ colorToken: buttonBackgroundColor, theme })};
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${({ theme, buttonHoverBackgroundColor }) =>
      getColorFromToken({ colorToken: buttonHoverBackgroundColor, theme })};

    & * {
      stroke: ${({ theme, iconHoverColor }) =>
        iconHoverColor && getColorFromToken({ colorToken: iconHoverColor, theme })};
    }
  }

  & > svg {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
  }

  & * {
    stroke: ${({ theme, iconColor }) =>
      iconColor && getColorFromToken({ colorToken: iconColor, theme })};
  }
`;
