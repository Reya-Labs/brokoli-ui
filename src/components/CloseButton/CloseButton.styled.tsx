import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';

export const CloseButtonStyled = styled('button', {
  shouldForwardProp: (prop) => prop !== 'colorToken',
})<{
  colorToken: BaseColorTokens;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 8px;
  gap: 4px;
  background: ${({ theme, colorToken }) =>
    `${getColorFromToken({ colorToken: `${colorToken}8`, theme })}`};
  border-radius: 4px;
  color: ${({ theme, colorToken }) =>
    `${getColorFromToken({ colorToken: `${colorToken}`, theme })}`};
  cursor: pointer;
  border: none;
  &:hover {
    background: ${({ theme, colorToken }) =>
      `${getColorFromToken({ colorToken: `${colorToken}7`, theme })}`};
  }
`;
