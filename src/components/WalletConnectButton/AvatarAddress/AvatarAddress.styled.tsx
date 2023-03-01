import styled from '@emotion/styled';

import { Typography } from '../../Typography';

export const AvatarAddressBox = styled('div')`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const AvatarAddressImg = styled('img')`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const AddressTypography = styled(Typography)`
  transition: text-shadow 300ms ease-in;
  &:hover {
    cursor: pointer;
    text-shadow: 0px 0px 10px rgba(225, 221, 247, 0.9);
  }
`;

export const RainbowLoaderBox = styled('div')`
  width: 150px;
`;
