import styled from '@emotion/styled';

import { ColorTokens, getColorFromToken } from '../../foundation/Colors';

export type PillVariant = 'regular' | 'compact';
export const PillBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColorToken' && prop !== 'variant',
})<{ backgroundColorToken: ColorTokens; variant: PillVariant }>`
  display: inline-block;
  padding: ${({ variant }) => (variant === 'regular' ? '4px 8px' : '0 4px')};
  border-radius: 4px;
  background: ${({ theme, backgroundColorToken }) =>
    getColorFromToken({ colorToken: backgroundColorToken, theme })};
`;
