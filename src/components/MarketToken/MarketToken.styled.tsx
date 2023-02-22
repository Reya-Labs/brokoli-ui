import styled from '@emotion/styled';

import { Icon } from '../Icon';
import { Typography } from '../Typography';

export const MarketTokenBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  & svg:nth-child(1) {
    z-index: 0;
  }

  & svg:nth-child(2) {
    margin-left: -4px;
    z-index: 1;
  }
`;

export const MarketTokenTypography = styled(Typography)`
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const IconsBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconStyled = styled(Icon)`
  width: 30px;
  height: 30px;
`;
