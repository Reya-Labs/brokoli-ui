import styled from '@emotion/styled';

import { BaseColorTokens } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const ExperiencePillsBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  width: 26px;
  height: 6px;
`;

export const ExperiencePill = styled('div', shouldNotForwardProps(['isActive', 'colorToken']))<{
  colorToken: BaseColorTokens;
  isActive: Boolean;
}>`
  height: 6px;
  width: 2px;
  border-radius: 2px;
  background: ${({ theme, colorToken, isActive }) =>
    isActive ? theme.colors[`${colorToken}500`] : theme.colors.black500};

  box-shadow: 0px 0px 8px 0px
    ${({ theme, colorToken, isActive }) =>
      isActive ? theme.colors[`${colorToken}200`] : undefined};
`;
