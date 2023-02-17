import styled from '@emotion/styled';

import { colors } from '../colors';

export const ColorTileBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  color: ${colors.lavenderWeb};
`;

export const ColorTileCircle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'highlight',
})<{
  backgroundColor: string;
  highlight: boolean;
}>`
  width: 44px;
  height: 44px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  ${({ highlight }) => (highlight ? `box-shadow: 0px 0px 23px ${colors.lavenderWeb}` : undefined)};
`;

export const ColorTypographyBox = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
  gap: 4px;
  color: ${colors.lavenderWeb};
`;
