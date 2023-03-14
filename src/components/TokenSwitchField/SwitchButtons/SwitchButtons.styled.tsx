import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../../foundation/Colors';
import { primaryBodyXSmallRegularCSSObject } from '../../Typography/Typography.css';

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

  background: ${({ active }) =>
    active
      ? `linear-gradient(259.45deg, ${colors.lavenderWeb8} 0%, ${colors.lavenderWeb7} 84.3%)`
      : `linear-gradient(261.54deg, ${colors.lavenderWeb8} -58.11%, ${colors.liberty8} 12.89%)`};
  box-shadow: ${({ error, active }) =>
    !error
      ? active
        ? `0px 4px 4px ${colors.liberty8}, 0px 0px 1px ${colors.lavenderWeb}`
        : `0px 0px 1px ${colors.lavenderWeb8}`
      : `0px 4px 4px ${colors.liberty8}, 0px 0px 1px ${colors.wildStrawberry}`};

  border-radius: 4px;
  z-index: ${({ active }) => (active ? 1 : 0)};

  ${css(primaryBodyXSmallRegularCSSObject)};
  color: ${({ error, active }) =>
    !error
      ? active
        ? colors.lavenderWeb
        : colors.lavenderWeb3
      : active
      ? colors.wildStrawberry
      : colors.wildStrawberry3};
  cursor: pointer;
  transition: all 200ms ease-in;

  &:disabled {
    cursor: not-allowed;
    color: ${({ active }) => (!active ? colors.lavenderWeb4 : colors.lavenderWeb2)};
    background: ${({ active }) =>
      active
        ? `linear-gradient(
      259.45deg,
      ${colors.liberty8} 0%,
      ${colors.lavenderWeb8} 33.14%,
      ${colors.lavenderWeb7} 84.3%)`
        : `linear-gradient(90.95deg, ${colors.lavenderWeb8} 0.66%, ${colors.liberty8} 99.34%)`};

    box-shadow: 0px 4px 4px ${colors.liberty8}, 0px 0px 1px ${colors.lavenderWeb};
  }
`;
