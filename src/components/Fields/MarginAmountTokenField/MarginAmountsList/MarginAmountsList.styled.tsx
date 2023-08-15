import styled from '@emotion/styled';

import { colors, ColorTokens, getColorFromToken } from '../../../../foundation/Colors';

export const ItemsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const ItemWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColorToken',
})<{
  backgroundColorToken: ColorTokens;
}>`
  cursor: pointer;
  display: flex;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background: ${({ backgroundColorToken }) => getColorFromToken(backgroundColorToken)};
  transition: background-color 200ms ease-in;

  &:hover {
    background: ${colors.liberty6};
  }
`;

export const TokenTypographyBox = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
