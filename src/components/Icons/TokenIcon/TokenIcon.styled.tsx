import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../../utils/should-not-forward-props';
import { Icon } from './Icon';

export const TokenIconStyled = styled(Icon, shouldNotForwardProps(['size']))<{
  size: number;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
