import styled from '@emotion/styled';

import { Icon } from './Icon';

export const MarketIconStyled = styled(Icon, {
  shouldForwardProp: (prop) => prop !== 'size',
})<{
  size: number;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
