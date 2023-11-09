import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getResponsiveTypographyStyleFromToken } from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
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
  width: 24px;
  height: 24px;
`;

export const ChainSelectorButton = styled('button', shouldNotForwardProps(['isPopoverOpen']))<{
  isPopoverOpen: boolean;
}>`
  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'primaryBodyMediumRegular' }))};

  padding: 0px;
  color: ${({ theme, isPopoverOpen }) =>
    isPopoverOpen ? theme.colors.white100 : theme.colors.white400};
  text-decoration: none;
  text-transform: none;
  display: flex;
  flex-direction: row;
  column-gap: 14px;
  align-items: center;
  cursor: pointer;

  transition: color 200ms ease-in;
  background: transparent;
  border: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.white100};
  }
`;

export const IconBox = styled('div')`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white900};
`;
