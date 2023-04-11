import styled from '@emotion/styled';

import { colors } from '../../foundation/Colors';
import { Typography } from '../Typography';

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

export type PillVariant = 'regular' | 'compact';
export const PillBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'variant',
})<{ backgroundColor: string; variant: PillVariant }>`
  display: inline-block;
  padding: ${({ variant }) => (variant === 'regular' ? '4px 8px' : '0 4px')};
  border-radius: 4px;
  background: ${({ backgroundColor }) => backgroundColor};
`;
