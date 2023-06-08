import styled from '@emotion/styled';

export type PillVariant = 'regular' | 'compact';
export const PillBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'variant',
})<{ backgroundColor: string; variant: PillVariant }>`
  display: inline-block;
  padding: ${({ variant }) => (variant === 'regular' ? '4px 8px' : '0 4px')};
  border-radius: 4px;
  background: ${({ backgroundColor }) => backgroundColor};
`;
