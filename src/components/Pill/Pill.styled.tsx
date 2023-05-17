import styled from '@emotion/styled';

import { RAINBOW_GRADIENT } from '../../foundation/Gradients';
import { Typography } from '../Typography';

export const RainbowTypography = styled(Typography)`
  display: inline-block;
  background: ${RAINBOW_GRADIENT};
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
