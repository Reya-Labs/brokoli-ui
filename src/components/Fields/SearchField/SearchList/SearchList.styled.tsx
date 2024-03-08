import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../../../foundation/Colors';
import { createTransition } from '../../../../utils/create-transition';
import { shouldNotForwardProps } from '../../../../utils/should-not-forward-props';

export const ItemsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 4px;
  width: 100%;
  max-height: 250px;
  overflow-y: scroll;
`;

export const ItemWrapper = styled('div', shouldNotForwardProps(['backgroundColorToken']))<{
  backgroundColorToken: ColorTokens;
}>`
  cursor: pointer;
  display: flex;
  padding: 8px;
  width: 100%;
  align-items: center;
  background: ${({ theme, backgroundColorToken }) =>
    getColorFromToken({ colorToken: backgroundColorToken, theme })};
  transition: ${createTransition({ properties: 'background-color' })};

  &:hover:enabled {
    background: ${({ theme }) => theme.colors.black700};
  }
`;
