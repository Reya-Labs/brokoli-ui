import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { Typography } from '../Typography';

export const PillTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<{ backgroundColor: string }>`
  display: inline-block;
  padding: 4px 8px;

  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
`;

export const RainbowTypography = styled(Typography)`
  display: inline-block;
  background: linear-gradient(
    90deg,
    ${colors.wildStrawberry} 0%,
    ${colors.orangeYellow} 31.47%,
    ${colors.skyBlueCrayola} 68.91%,
    ${colors.ultramarineBlue} 100%
  );
  background-clip: text;
  text-fill-color: transparent;
`;

export const RainbowBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<{ backgroundColor: string }>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background: ${({ backgroundColor }) => backgroundColor};
`;
