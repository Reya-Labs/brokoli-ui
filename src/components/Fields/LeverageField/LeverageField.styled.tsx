import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getTypographyStyleFromToken } from '../../../foundation/Typography';

export const LeverageFieldBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const FieldButtonsBox = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const CurrencyFieldBox = styled('div')`
  width: 80px;
`;

export const ButtonsBox = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex: 1;
  box-sizing: border-box;
`;

export const ButtonStyled = styled('button')<{
  active: boolean;
}>`
  flex: 1;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;

  background: ${({ theme, active }) =>
    active
      ? `linear-gradient(259.45deg, ${theme.colors.lavenderWeb8} 0%, ${theme.colors.lavenderWeb7} 84.3%)`
      : `linear-gradient(90.95deg, ${theme.colors.lavenderWeb8} 0.66%, ${theme.colors.liberty8} 99.34%)`};
  box-shadow: ${({ theme, active }) =>
    active
      ? `0px 0px 1px ${theme.colors.lavenderWeb}`
      : `0px 0px 1px ${theme.colors.lavenderWeb6}`};

  border-radius: 4px;

  ${({ theme }) =>
    css(getTypographyStyleFromToken({ theme, token: 'secondaryBodyXSmallRegular' }))};
  color: ${({ theme }) => theme.colors.lavenderWeb};
  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.lavenderWeb};
  }

  &:active {
    background: linear-gradient(
      259.45deg,
      ${({ theme }) => theme.colors.liberty6} 0%,
      ${({ theme }) => theme.colors.lavenderWeb7} 84.3%
    );
    box-shadow:
      0px -1px 4px ${({ theme }) => theme.colors.liberty8},
      0px 0px 1px ${({ theme }) => theme.colors.lavenderWeb};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme, active }) =>
      !active ? theme.colors.lavenderWeb4 : theme.colors.lavenderWeb2};
    background: ${({ theme, active }) =>
      active
        ? `linear-gradient(
      259.45deg,
      ${theme.colors.liberty8} 0%,
      ${theme.colors.lavenderWeb8} 33.14%,
      ${theme.colors.lavenderWeb7} 84.3%)`
        : `linear-gradient(261.54deg, ${theme.colors.lavenderWeb8} -58.11%, ${theme.colors.liberty8} 12.89%)`};

    box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.lavenderWeb};
  }
`;
