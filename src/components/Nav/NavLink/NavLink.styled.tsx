import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyToken,
} from '../../../foundation/Typography';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const NavLinkButtonBox = styled(
  'div',
  shouldNotForwardProps(['isActive', 'isPopoverOpen', 'colorToken']),
)<{
  isPopoverOpen: boolean;
  isActive: boolean;
  colorToken: BaseColorTokens | 'rainbow';
}>`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  padding: 6px 12px;
  color: ${({ theme, colorToken, isPopoverOpen, isActive }) =>
    colorToken !== 'rainbow'
      ? isPopoverOpen || isActive
        ? getColorFromToken({ colorToken: `${colorToken}100`, theme })
        : getColorFromToken({ colorToken: `black100`, theme })
      : ''};
  border-radius: ${({ isActive }) => (isActive ? '8px' : '0px')};
  background: ${({ isActive, theme }) =>
    isActive ? getColorFromToken({ colorToken: `black800`, theme }) : undefined};
  transition: color 200ms ease-in;
  &:hover {
    ${({ theme, colorToken }) =>
      colorToken === 'rainbow'
        ? ''
        : `color: ${getColorFromToken({ colorToken: `${colorToken}100`, theme })}`};
    border-radius: 8px;
    background: ${({ theme }) => getColorFromToken({ colorToken: `black800`, theme })};
  }
`;

export const NavLinkButton = styled(
  'a',
  shouldNotForwardProps(['typographyToken', 'isActive', 'isPopoverOpen', 'colorToken']),
)<{
  isPopoverOpen: boolean;
  isActive: boolean;
  colorToken: BaseColorTokens | 'rainbow';
  typographyToken: TypographyToken;
}>`
  ${({ theme, typographyToken }) =>
    css(
      getResponsiveTypographyStyleFromToken({
        theme,
        token: typographyToken,
      }),
    )};

  text-decoration: none;
  text-transform: none;

  color: inherit;
  ${({ theme, colorToken }) =>
    colorToken === 'rainbow'
      ? `
    background: ${theme.gradients.rainbow};
    background-clip: text;
    text-fill-color: transparent;
  `
      : ''};

  &:hover {
    ${({ theme, colorToken }) =>
      colorToken !== 'rainbow'
        ? ''
        : `
    background: ${theme.gradients.invertedRainbow};
    background-clip: text;
    text-fill-color: transparent;
  `};
  }
`;
