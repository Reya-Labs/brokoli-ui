import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const AvatarAddressImgStyled = styled('img', shouldNotForwardProps(['size']))<{
  size: number;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`;
