import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  getResponsiveTypographyStyleFromToken,
  TypographyTokens,
} from '../../foundation/Typography';
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
  padding: 8px 10px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black700};
  background: ${({ theme }) => theme.colors.black900};
  transition: all 200ms ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.black700};
    border: 1px solid ${({ theme }) => theme.colors.black500};
  }
`;

export const Box = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ChainSelectorButton = styled(
  'button',
  shouldNotForwardProps(['typographyToken', 'disabled', 'isPopoverOpen']),
)<{
  isPopoverOpen: boolean;
  disabled: boolean;
  typographyToken: TypographyTokens;
}>`
  ${({ theme, typographyToken }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: typographyToken }))};

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
