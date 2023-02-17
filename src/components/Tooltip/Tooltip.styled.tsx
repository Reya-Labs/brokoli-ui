import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

export const ExclaimBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  cursor: pointer;
  display: inline-block;
  & g {
    stroke: ${({ color }) => color};
  }
`;

export const TooltipBox = styled('div')`
  box-sizing: border-box;
  background: ${colors.liberty7};
  border: 1px solid ${colors.lavenderWeb6};
  border-radius: 8px;
  width: max-content;
  max-width: calc(100vw - 10px);
  padding: 8px;
`;
