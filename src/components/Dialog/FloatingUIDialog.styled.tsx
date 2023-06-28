import styled from '@emotion/styled';
import { FloatingOverlay } from '@floating-ui/react';

import { LAYER_INDEXES } from '../../foundation/LayerIndexes';

export const FloatingOverlayStyled = styled(FloatingOverlay)`
  backdrop-filter: blur(4px);
  z-index: ${LAYER_INDEXES.DIALOG};
  display: grid;
  place-items: center;
`;
