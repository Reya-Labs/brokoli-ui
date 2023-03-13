import styled from '@emotion/styled';

import { Typography } from '../Typography';

export const WalletButton = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 18px 8px 16px;
  gap: 10px;

  border-radius: 8px;
  border: none;

  flex: none;
  order: 0;
  flex-grow: 0;

  background: inherit;
`;

export const WalletConnectButtonTypography = styled(Typography)`
  transition: text-shadow 200ms ease-in;
  &:hover {
    cursor: pointer;
    text-shadow: 0px 0px 10px rgba(225, 221, 247, 0.9);
  }
`;

export const RainbowLoaderBox = styled('div')`
  width: 150px;
  height: 37px;
  display: flex;
  align-items: center;
`;
