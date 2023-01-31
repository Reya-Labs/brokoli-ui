import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { colors } from '../../../foundation/Colors';
import { bodyMediumRegularCSS } from '../../Typography/Typography.css';

export const NavLinkButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isPopoverOpen',
})<{
  isPopoverOpen: boolean;
  isActive: boolean;
}>`
  ${bodyMediumRegularCSS};
  padding: 6px 12px;
  color: ${({ isPopoverOpen, isActive }) =>
    isPopoverOpen || isActive ? colors.lavenderWeb : colors.lavenderWeb3};
  text-decoration: none;
  text-transform: none;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;

  transition: color 300ms ease-in;

  &:hover {
    color: ${colors.lavenderWeb};
  }
`;

export const globalReactTinyPopoverContainerCSS = css`
  .react-tiny-popover-container {
    /* Liberty 7 */
    background: ${colors.liberty7};
    /* Lavender Web 7 */
    border: 1px solid ${colors.lavenderWeb7};
    box-shadow: 0px 0px 20px rgba(225, 221, 247, 0.1);
    border-radius: 4px;
    min-width: 160px;
  }
`;
