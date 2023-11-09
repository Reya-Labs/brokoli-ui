import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';

export const ColorTileBox = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ColorBackgroundBox = styled('div', shouldNotForwardProps(['backgroundColor']))<{
  backgroundColor: string;
}>`
  padding: 26px 34px 26px 32px;
  text-align: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ColorTypographyBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border-right: 1px solid gainsboro;
  background: ${({ theme }) => theme.colors.white100};
`;
