import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../../../foundation/Colors';

export const ItemsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 4px;
  width: 100%;
  box-sizing: border-box;
  max-height: 250px;
  overflow-y: scroll;
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
  background: ${({ theme, backgroundColorToken }) =>
    getColorFromToken({ colorToken: backgroundColorToken, theme })};
  transition: background-color 200ms ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.liberty6};
  }
`;
