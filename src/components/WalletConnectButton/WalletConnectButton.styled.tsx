import styled from '@emotion/styled';

import { addAlpha } from '../../foundation/Colors';
import { createTransition } from '../../utils/createTransition';
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
  transition: ${createTransition({ properties: 'text-shadow' })};
  &:hover:enabled {
    cursor: pointer;
    text-shadow: 0px 0px 10px ${({ theme }) => addAlpha(theme.colors.white100, 0.9)};
  }
`;

export const RainbowLoaderBox = styled('div')`
  width: 150px;
  height: 37px;
  display: flex;
  align-items: center;
`;
