import styled from '@emotion/styled';
import { FloatingOverlay } from '@floating-ui/react';

export const FloatingOverlayStyled = styled(FloatingOverlay)`
  backdrop-filter: blur(4px);
  z-index: ${({ theme }) => theme.layerIndexes.dialog};
  display: grid;
  place-items: center;
`;
