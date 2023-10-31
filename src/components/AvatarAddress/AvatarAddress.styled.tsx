import styled from '@emotion/styled';

import { addAlpha } from '../../foundation/Colors';
import { Typography } from '../Typography';

export const AvatarAddressBox = styled('div')`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const AvatarAddressImg = styled('img', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{
  size: number;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`;

export const AddressTypography = styled(Typography)`
  transition: text-shadow 200ms ease-in;
  &:hover {
    cursor: pointer;
    text-shadow: 0px 0px 10px ${({ theme }) => addAlpha(theme.colors.white100, 0.9)};
  }
`;

export const RainbowLoaderBox = styled('div')`
  width: 150px;
`;
