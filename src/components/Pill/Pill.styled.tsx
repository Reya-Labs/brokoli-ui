import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';
import { shouldNotForwardProps } from '../../utils/should-not-forward-props';

export type PillVariant = 'regular' | 'compact';
export const PillBox = styled('div', shouldNotForwardProps(['backgroundColorToken', 'variant']))<{
  backgroundColorToken: ColorTokens;
  variant: PillVariant;
}>`
  display: inline-flex;
  align-items: center;
  padding: ${({ variant }) => (variant === 'regular' ? '2px 8px' : '0 4px')};
  border-radius: 24px;
  background: ${({ theme, backgroundColorToken }) =>
    getColorFromToken({ colorToken: backgroundColorToken, theme })};
`;
