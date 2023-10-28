import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BaseColorTokens, getColorFromToken } from '../../../foundation/Colors';

export const NavLinkButtonBox = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'isActive' && prop !== 'isPopoverOpen' && prop !== 'colorToken',
})<{
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
        ? getColorFromToken({ colorToken, theme })
        : getColorFromToken({ colorToken: `${colorToken}3`, theme })
      : ''};
  transition: color 200ms ease-in;
  &:hover {
    ${({ theme, colorToken }) =>
      colorToken === 'rainbow' ? '' : `color: ${getColorFromToken({ colorToken, theme })}`};
  }
`;

export const NavLinkButton = styled(Link, {
  shouldForwardProp: (prop) =>
    prop !== 'isActive' && prop !== 'isPopoverOpen' && prop !== 'colorToken',
})<{
  isPopoverOpen: boolean;
  isActive: boolean;
  colorToken: BaseColorTokens | 'rainbow';
}>`
  ${({ theme }) => css(theme.typography.primaryBodyMediumRegular.styleObject)};

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
