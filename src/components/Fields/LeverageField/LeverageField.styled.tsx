import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getResponsiveTypographyStyleFromToken } from '../../../foundation/Typography';

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
      ? `linear-gradient(259.45deg, ${theme.colors.white900} 0%, ${theme.colors.white800} 84.3%)`
      : `linear-gradient(90.95deg, ${theme.colors.white900} 0.66%, ${theme.colors.black900} 99.34%)`};
  box-shadow: ${({ theme, active }) =>
    active ? `0px 0px 1px ${theme.colors.white100}` : `0px 0px 1px ${theme.colors.white700}`};

  border-radius: 4px;

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'bodyXSmallRegular' }))};
  color: ${({ theme }) => theme.colors.white100};
  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.white100};
  }

  &:active {
    background: linear-gradient(
      259.45deg,
      ${({ theme }) => theme.colors.black700} 0%,
      ${({ theme }) => theme.colors.white800} 84.3%
    );
    box-shadow:
      0px -1px 4px ${({ theme }) => theme.colors.black900},
      0px 0px 1px ${({ theme }) => theme.colors.white100};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme, active }) => (!active ? theme.colors.white500 : theme.colors.white300)};
    background: ${({ theme, active }) =>
      active
        ? `linear-gradient(
      259.45deg,
      ${theme.colors.black900} 0%,
      ${theme.colors.white900} 33.14%,
      ${theme.colors.white800} 84.3%)`
        : `linear-gradient(261.54deg, ${theme.colors.white900} -58.11%, ${theme.colors.black900} 12.89%)`};

    box-shadow: 0px 0px 1px ${({ theme }) => theme.colors.white100};
  }
`;
