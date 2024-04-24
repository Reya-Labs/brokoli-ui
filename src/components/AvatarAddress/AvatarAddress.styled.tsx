import styled from '@emotion/styled';

import { addAlpha } from '../../foundation/Colors';
import { createTransition } from '../../utils/create-transition';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';
import { Typography } from '../Typography';

export const AvatarAddressBox = styled('div')`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const AddressTypography = styled(Typography)`
  transition: ${createTransition({
    properties: 'text-shadow',
  })};
  &:hover {
    cursor: pointer;
    text-shadow: 0px 0px 10px ${({ theme }) => addAlpha(theme.colors.white100, 0.9)};
  }
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
