import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';

export const NotificationBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'colorToken',
})<{
  colorToken: BaseColorTokens;
}>`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;

  background: ${({ theme }) => theme.colors.liberty8};

  border: 1px solid
    ${({ theme, colorToken }) => `${getColorFromToken({ colorToken: `${colorToken}3`, theme })}`};
  border-radius: 4px;
`;

export const TitleBox = styled('div')`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;
