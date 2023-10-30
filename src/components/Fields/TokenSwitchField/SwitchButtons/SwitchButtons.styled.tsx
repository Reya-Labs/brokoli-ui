import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getTypographyStyleFromToken } from '../../../../foundation/Typography';

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
      ? `linear-gradient(259.45deg, ${theme.colors.lavenderWeb8} 0%, ${theme.colors.lavenderWeb7} 84.3%)`
      : `linear-gradient(261.54deg, ${theme.colors.lavenderWeb8} -58.11%, ${theme.colors.liberty8} 12.89%)`};
  box-shadow: ${({ theme, error, active }) =>
    !error
      ? active
        ? `0px 4px 4px ${theme.colors.liberty8}, 0px 0px 1px ${theme.colors.lavenderWeb}`
        : `0px 0px 1px ${theme.colors.lavenderWeb8}`
      : `0px 4px 4px ${theme.colors.liberty8}, 0px 0px 1px ${theme.colors.wildStrawberry}`};

  border-radius: 4px;
  z-index: ${({ active }) => (active ? 1 : 0)};

  ${({ theme }) => css(getTypographyStyleFromToken({ theme, token: 'primaryBodyXSmallRegular' }))};

  color: ${({ theme, error, active }) =>
    !error
      ? active
        ? theme.colors.lavenderWeb
        : theme.colors.lavenderWeb3
      : active
      ? theme.colors.wildStrawberry
      : theme.colors.wildStrawberry3};
  cursor: pointer;
  transition: all 200ms ease-in;

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
        : `linear-gradient(90.95deg, ${theme.colors.lavenderWeb8} 0.66%, ${theme.colors.liberty8} 99.34%)`};

    box-shadow: ${({ theme, active }) => `
      0px 4px 4px ${theme.colors.liberty8},
      0px 0px 1px ${theme.colors.lavenderWeb}
    `};
  }
`;
