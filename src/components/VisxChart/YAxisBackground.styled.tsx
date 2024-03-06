import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const Box = styled('foreignObject', shouldNotForwardProps(['backgroundColor']))<{
  backgroundColor: string;
}>`
  background: ${({ backgroundColor }) => backgroundColor};
`;
