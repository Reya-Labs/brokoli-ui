import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { colors } from '../../../foundation/Colors';
import { primaryBodyMediumRegularCSSObject } from '../../Typography/Typography.css';

export const NavLinkButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isPopoverOpen',
})<{
  isPopoverOpen: boolean;
  isActive: boolean;
}>`
  ${css(primaryBodyMediumRegularCSSObject)};
  padding: 6px 12px;
  color: ${({ isPopoverOpen, isActive }) =>
    isPopoverOpen || isActive ? colors.lavenderWeb : colors.lavenderWeb3};
  text-decoration: none;
  text-transform: none;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;

  transition: color 200ms ease-in;

  &:hover {
    color: ${colors.lavenderWeb};
  }
`;
