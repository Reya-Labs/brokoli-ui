import styled from '@emotion/styled';

import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export const AvatarAddressBox = styled('div')`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const RainbowLoaderBox = styled('div', shouldNotForwardProps(['height']))<{
  height: number;
}>`
  width: 150px;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
