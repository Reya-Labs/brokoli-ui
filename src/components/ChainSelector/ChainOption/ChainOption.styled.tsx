import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { getResponsiveTypographyStyleFromToken } from '../../../foundation/Typography';
import { createTransition } from '../../../utils/create-transition';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const IconBox = styled('div', shouldNotForwardProps(['isActive']))<{
  isActive: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.black900 : theme.colors.black700};
  transition: ${createTransition({ properties: 'background-color' })};
  display: flex;
  align-items: center;
`;

export const ChainOptionButton = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  gap: 4px;

  ${({ theme }) =>
    css(getResponsiveTypographyStyleFromToken({ theme, token: 'bodySmallRegular' }))};

  color: ${({ theme }) => theme.colors.white100};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.black900};
  border-radius: 2px;
  width: 100%;
  transition: ${createTransition({ properties: 'background-color' })};
  border: 0;
  cursor: pointer;

  &:hover:enabled {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.black700};
  }

  &:hover:enabled div {
    background: ${({ theme }) => theme.colors.black800};
  }
`;

export const ActiveChainOptionButton = styled(ChainOptionButton)`
  text-decoration: none;
  background: ${({ theme }) => theme.colors.black900};
`;
