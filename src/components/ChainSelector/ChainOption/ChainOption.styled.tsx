import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../../foundation/Colors';
import { primaryBodySmallRegularCSSObject } from '../../Typography/Typography.css';

export const IconBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{
  isActive: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ isActive }) => (isActive ? colors.liberty7 : colors.lavenderWeb8)};
  transition: background-color 200ms ease-in;
`;

export const ChainOptionButton = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  ${css(primaryBodySmallRegularCSSObject)};

  color: ${colors.lavenderWeb};
  text-decoration: none;
  background-color: ${colors.liberty7};
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color, text-shadow 200ms ease-in;
  border: 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.7);
    background-color: ${colors.lavenderWeb8};
  }

  &:hover div {
    background: ${colors.liberty7};
  }
`;

export const ActiveChainOptionButton = styled(ChainOptionButton)`
  text-decoration: none;
  text-shadow: 0px 0px 20px rgba(225, 221, 247, 0.7);
  background: ${colors.lavenderWeb8};
`;
