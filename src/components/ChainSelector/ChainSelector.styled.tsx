import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { primaryBodyMediumRegularCSS } from '../Typography/Typography.css';
import { ReactComponent as Warning } from './icons/warning.svg';

export const SelectorBox = styled('div')`
  display: inline-flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
  padding: 8px 8px 8px 0px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
`;

export const WarningIcon = styled(Warning)`
  width: 14px;
  height: 14px;
`;

export const ChainSelectorButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'isPopoverOpen',
})<{
  isPopoverOpen: boolean;
}>`
  ${primaryBodyMediumRegularCSS};
  padding: 0px;
  color: ${({ isPopoverOpen }) => (isPopoverOpen ? colors.lavenderWeb : colors.lavenderWeb3)};
  text-decoration: none;
  text-transform: none;
  display: flex;
  flex-direction: row;
  column-gap: 14px;
  align-items: center;
  cursor: pointer;

  transition: color 300ms ease-in;
  background: transparent;
  border: 0;
  &:hover {
    color: ${colors.lavenderWeb};
  }
`;

export const CHAIN_SELECTOR_POPOVER_CONTAINER_CLASS_NAME = 'react-tiny-popover-container';
export const globalReactTinyPopoverContainerCSS = css`
  .${CHAIN_SELECTOR_POPOVER_CONTAINER_CLASS_NAME} {
    /* Liberty 7 */
    background: ${colors.liberty7};
    /* Lavender Web 7 */
    border: 1px solid ${colors.lavenderWeb7};
    box-shadow: 0px 0px 20px rgba(225, 221, 247, 0.1);
    border-radius: 4px;
    min-width: 160px;
    margin-top: 8px;
  }
`;
