import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getResponsiveTypographyStyleFromToken } from '../../foundation/Typography';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const SelectorBox = styled('div', shouldNotForwardProps(['disabled']))<{
  disabled: boolean;
}>`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  z-index: 1;
  padding: 8px 8px 8px 0px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  border-radius: 4px;
  width: 100%;
`;

export const Box = styled('div')`
  position: relative;
`;

export const ChainSelectorButton = styled(
  'button',
  shouldNotForwardProps(['disabled', 'isPopoverOpen']),
)<{
  isPopoverOpen: boolean;
  disabled: boolean;
}>`
  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'bodyMediumRegular' }))};

  padding: 0px;
  color: ${({ theme, isPopoverOpen }) =>
    isPopoverOpen ? theme.colors.white100 : theme.colors.white400};
  text-decoration: none;
  text-transform: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  column-gap: 14px;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: color 200ms ease-in;
  background: transparent;
  border: 0;
  &:hover {
    color: ${({ disabled, theme }) => (disabled ? undefined : theme.colors.white100)};
  }
`;

export const IconBox = styled('div')`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black900};
`;
