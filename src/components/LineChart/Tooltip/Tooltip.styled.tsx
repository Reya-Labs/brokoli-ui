import styled from '@emotion/styled';

import { colors } from '../../../foundation/Colors';

const ARROW_SIZE = 10;

export const TooltipBox = styled('div')`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 8px;

  background: ${colors.liberty7};
  border: 1px solid ${colors.lavenderWeb6};
  border-radius: 8px;

  &:after {
    content: '';
    width: ${ARROW_SIZE}px;
    height: ${ARROW_SIZE}px;
    transform: rotate(-45deg);
    background: ${colors.liberty7};
    border-left: 1px solid ${colors.lavenderWeb6};
    border-bottom: 1px solid ${colors.lavenderWeb6};
    position: absolute;
    z-index: 1;
    bottom: -${ARROW_SIZE / 2}px;
    left: calc(50% - ${ARROW_SIZE / 2}px);
  }
`;
