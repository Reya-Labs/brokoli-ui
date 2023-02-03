import styled from '@emotion/styled';

import { colors } from '../../../foundation/Colors';

export const TooltipBox = styled('div')`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 8px;

  background: ${colors.liberty7};
  border: 1px solid ${colors.lavenderWeb6};
  border-radius: 8px;
`;
