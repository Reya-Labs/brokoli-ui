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
  background: ${({ colorToken }) => `${getColorFromToken(`${colorToken}8`)}`};
  border-radius: 4px;
  color: ${({ colorToken }) => `${getColorFromToken(`${colorToken}`)}`};
  cursor: pointer;
  border: none;
  &:hover {
    background: ${({ colorToken }) => `${getColorFromToken(`${colorToken}7`)}`};
  }
`;
