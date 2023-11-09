import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BaseColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { getResponsiveTypographyStyleFromToken } from '../../../foundation/Typography';
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
        : getColorFromToken({ colorToken: `${colorToken}400`, theme })
      : ''};
  transition: color 200ms ease-in;
  &:hover {
    ${({ theme, colorToken }) =>
      colorToken === 'rainbow'
        ? ''
        : `color: ${getColorFromToken({ colorToken: `${colorToken}100`, theme })}`};
  }
`;

export const NavLinkButton = styled(
  Link,
  shouldNotForwardProps(['isActive', 'isPopoverOpen', 'colorToken']),
)<{
  isPopoverOpen: boolean;
  isActive: boolean;
  colorToken: BaseColorTokens | 'rainbow';
}>`
  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'primaryBodyMediumRegular' }))};

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
