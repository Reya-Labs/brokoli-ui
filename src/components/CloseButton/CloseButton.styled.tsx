import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const CloseButtonStyled = styled('button', shouldNotForwardProps(['colorToken']))<{
  colorToken: BaseColorTokens;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 8px;
  gap: 4px;
  background: ${({ theme, colorToken }) =>
    `${getColorFromToken({ colorToken: `${colorToken}900`, theme })}`};
  border-radius: 4px;
  color: ${({ theme, colorToken }) =>
    `${getColorFromToken({ colorToken: `${colorToken}100`, theme })}`};
  cursor: pointer;
  border: none;
  &:hover {
    background: ${({ theme, colorToken }) =>
      `${getColorFromToken({ colorToken: `${colorToken}800`, theme })}`};
  }
`;
