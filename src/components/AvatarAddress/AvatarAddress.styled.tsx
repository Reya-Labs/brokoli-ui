import styled from '@emotion/styled';

import { addAlpha } from '../../foundation/Colors';
import { createTransition } from '../../utils/createTransition';
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
  &:hover:enabled {
    cursor: pointer;
    text-shadow: 0px 0px 10px ${({ theme }) => addAlpha(theme.colors.white100, 0.9)};
  }
`;

export const RainbowLoaderBox = styled('div')`
  width: 150px;
`;
