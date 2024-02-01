import styled from '@emotion/styled';

import { BaseColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const NotificationBox = styled('div', shouldNotForwardProps(['colorToken']))<{
  colorToken: BaseColorTokens;
}>`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;

  background: ${({ theme }) => theme.colors.black900};

  border: 1px solid
    ${({ theme, colorToken }) => `${getColorFromToken({ colorToken: `${colorToken}100`, theme })}`};
  border-radius: 8px;
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
