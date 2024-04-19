import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../../foundation/Colors';
import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../../foundation/Typography';
import { createTransition } from '../../../utils/create-transition';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const NavLinkButtonBox = styled(
  'div',
  shouldNotForwardProps(['isActive', 'isPopoverOpen', 'colorToken']),
)<{
  colorToken: BaseColorTokens | 'rainbow';
  isActive: boolean;
  isPopoverOpen: boolean;
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
        : getColorFromToken({ colorToken: `${colorToken}950`, theme })
      : ''};
  border-radius: ${({ isActive }) => (isActive ? '8px' : '0px')};
  background: ${({ isActive, theme }) =>
    isActive ? getColorFromToken({ colorToken: `black800`, theme }) : undefined};
  transition: ${createTransition()};
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
  colorToken: BaseColorTokens | 'rainbow';
  isActive: boolean;
  isPopoverOpen: boolean;
  typographyToken: TypographyTokens;
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
