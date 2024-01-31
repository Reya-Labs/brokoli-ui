import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { addAlpha } from '../../../foundation/Colors';
import { getResponsiveTypographyStyleFromToken } from '../../../foundation/Typography';
import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const IconBox = styled('div', shouldNotForwardProps(['isActive']))<{
  isActive: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.black900 : theme.colors.black700};
  transition: background-color 200ms ease-in;
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
  box-sizing: border-box;
  transition: background-color 200ms ease-in;
  border: 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.black700};
  }

  &:hover div {
    background: ${({ theme }) => theme.colors.black800};
  }
`;

export const ActiveChainOptionButton = styled(ChainOptionButton)`
  text-decoration: none;
  text-shadow: 0px 0px 20px ${({ theme }) => addAlpha(theme.colors.white100, 0.7)};
  background: ${({ theme }) => theme.colors.white900};
`;
