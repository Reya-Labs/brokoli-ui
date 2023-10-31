import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getResponsiveTypographyStyleFromToken } from '../../../../foundation/Typography';

export const SwitchButtonsBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  & button:nth-child(1) {
    margin-right: -2px;
  }
`;

export const SwitchButton = styled('button')<{
  error?: boolean;
  active: boolean;
}>`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 8px;

  background: ${({ theme, active }) =>
    active
      ? `linear-gradient(259.45deg, ${theme.colors.white900} 0%, ${theme.colors.white800} 84.3%)`
      : `linear-gradient(261.54deg, ${theme.colors.white900} -58.11%, ${theme.colors.liberty8} 12.89%)`};
  box-shadow: ${({ theme, error, active }) =>
    !error
      ? active
        ? `0px 4px 4px ${theme.colors.liberty8}, 0px 0px 1px ${theme.colors.white100}`
        : `0px 0px 1px ${theme.colors.white900}`
      : `0px 4px 4px ${theme.colors.liberty8}, 0px 0px 1px ${theme.colors.wildStrawberry}`};

  border-radius: 4px;
  z-index: ${({ active }) => (active ? 1 : 0)};

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'primaryBodyXSmallRegular' }))};

  color: ${({ theme, error, active }) =>
    !error
      ? active
        ? theme.colors.white100
        : theme.colors.white400
      : active
      ? theme.colors.wildStrawberry
      : theme.colors.wildStrawberry3};
  cursor: pointer;
  transition: all 200ms ease-in;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme, active }) => (!active ? theme.colors.white500 : theme.colors.white300)};
    background: ${({ theme, active }) =>
      active
        ? `linear-gradient(
      259.45deg,
      ${theme.colors.liberty8} 0%,
      ${theme.colors.white900} 33.14%,
      ${theme.colors.white800} 84.3%)`
        : `linear-gradient(90.95deg, ${theme.colors.white900} 0.66%, ${theme.colors.liberty8} 99.34%)`};

    box-shadow: ${({ theme, active }) => `
      0px 4px 4px ${theme.colors.liberty8},
      0px 0px 1px ${theme.colors.white100}
    `};
  }
`;
