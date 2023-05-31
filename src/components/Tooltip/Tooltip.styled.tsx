import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';

export const TooltipBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'limitWidth',
})<{
  limitWidth: boolean;
}>`
  box-sizing: border-box;
  background: linear-gradient(90.95deg, ${colors.lavenderWeb8} 0.66%, ${colors.liberty8} 99.34%);
  border: 1px solid ${colors.lavenderWeb7};
  border-radius: 8px;
  width: max-content;
  ${({ limitWidth }) => (limitWidth ? 'max-width: 240px' : '')};
  padding: 12px;
`;

export const TriggerBox = styled('span')`
  display: inline-block;
`;
