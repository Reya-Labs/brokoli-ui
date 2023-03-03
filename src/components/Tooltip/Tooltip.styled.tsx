import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

export const ExclaimBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})<{
  color: string;
}>`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  & svg {
    width: 1em;
    height: 1em;
  }
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
  max-width: 240px;
  padding: 12px;
`;
