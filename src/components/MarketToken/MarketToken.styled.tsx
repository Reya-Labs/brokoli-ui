import styled from '@emotion/styled';

import { Icon } from '../Icon';

export const MarketTokenBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  & svg:nth-child(1) {
    z-index: 0;
  }

  & svg:nth-child(2) {
    margin-left: -4px;
    z-index: 1;
  }
`;

export const IconsBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconStyled = styled(Icon, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{
  size: number;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
