import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { addAlpha } from '../../../foundation/Colors';
import { getResponsiveTypographyStyleFromToken } from '../../../foundation/Typography';

export const IconBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{
  isActive: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.liberty7 : theme.colors.lavenderWeb8};
  transition: background-color 200ms ease-in;
`;

export const ChainOptionButton = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'primaryBodySmallRegular' }))};

  color: ${({ theme }) => theme.colors.lavenderWeb};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.liberty7};
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  transition:
    background-color,
    text-shadow 200ms ease-in;
  border: 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    text-shadow: 0px 0px 20px ${({ theme }) => addAlpha(theme.colors.lavenderWeb, 0.7)};
    background-color: ${({ theme }) => theme.colors.lavenderWeb8};
  }

  &:hover div {
    background: ${({ theme }) => theme.colors.liberty7};
  }
`;

export const ActiveChainOptionButton = styled(ChainOptionButton)`
  text-decoration: none;
  text-shadow: 0px 0px 20px ${({ theme }) => addAlpha(theme.colors.lavenderWeb, 0.7)};
  background: ${({ theme }) => theme.colors.lavenderWeb8};
`;
