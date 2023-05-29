import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { primaryBodyXSmallRegularCSSObject } from '../Typography/Typography.css';

export const PillSelectorBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  & button:nth-child(n + 1) {
    margin-right: -2px;
  }
`;

export const PillSelectorButton = styled('button')<{
  error?: boolean;
  active: boolean;
}>`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 8px;

  background: ${({ active }) => (active ? colors.lavenderWeb7 : colors.liberty8)};
  box-shadow: ${({ error, active }) =>
    !error
      ? active
        ? `0px 2px 10px ${colors.liberty6}, 0px 8px 40px rgba(38, 103, 255, 0.2), 0px 5px 40px rgba(255, 74, 169, 0.2)`
        : `0px 0px 1px ${colors.lavenderWeb6}`
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
    background: ${({ active }) => (active ? colors.lavenderWeb6 : colors.liberty7)};

    box-shadow: 0px 4px 4px ${colors.liberty8}, 0px 0px 1px ${colors.lavenderWeb};
  }
`;