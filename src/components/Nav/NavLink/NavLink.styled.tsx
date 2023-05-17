import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BaseColorTokens, getColorFromToken } from '../../../foundation/Colors';
import { INVERTED_RAINBOW_GRADIENT, RAINBOW_GRADIENT } from '../../../foundation/Gradients';
import { primaryBodyMediumRegularCSSObject } from '../../Typography/Typography.css';

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
  color: ${({ colorToken, isPopoverOpen, isActive }) =>
    colorToken !== 'rainbow'
      ? isPopoverOpen || isActive
        ? getColorFromToken(colorToken)
        : getColorFromToken(`${colorToken}3`)
      : ''};
  transition: color 200ms ease-in;
  &:hover {
    ${({ colorToken }) =>
      colorToken === 'rainbow' ? '' : `color: ${getColorFromToken(colorToken)}`};
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
  ${css(primaryBodyMediumRegularCSSObject)};

  text-decoration: none;
  text-transform: none;

  color: inherit;
  ${({ colorToken }) =>
    colorToken === 'rainbow'
      ? `
    background: ${RAINBOW_GRADIENT};
    background-clip: text;
    text-fill-color: transparent;
  `
      : ''};

  &:hover {
    ${({ colorToken }) =>
      colorToken !== 'rainbow'
        ? ''
        : `
    background: ${INVERTED_RAINBOW_GRADIENT};
    background-clip: text;
    text-fill-color: transparent;
  `};
  }
`;
