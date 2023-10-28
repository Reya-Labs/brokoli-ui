import styled from '@emotion/styled';
import { FloatingOverlay } from '@floating-ui/react';

import { layerIndexes } from '../../foundation/LayerIndexes';

export const FloatingOverlayStyled = styled(FloatingOverlay)`
  backdrop-filter: blur(4px);
  z-index: ${layerIndexes.dialog};
  display: grid;
  place-items: center;
`;
