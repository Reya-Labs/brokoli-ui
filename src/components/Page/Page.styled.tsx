import styled from '@emotion/styled';

import { BACKGROUND_GRADIENT } from '../../foundation/Gradients';
import { LAYER_INDEXES } from '../../foundation/LayerIndexes';
import BackgroundNoiseImage from './assets/background-noise.png';

export const PageBox = styled('div')`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const PageContentBox = styled('div')`
  z-index: ${LAYER_INDEXES.PAGE_CONTENT};
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundBox = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${LAYER_INDEXES.BACKGROUND};
  width: 100%;
  height: 100%;
  background: ${BACKGROUND_GRADIENT};
`;

export const BackgroundNoiseBox = styled('div')`
  background-image: url(${BackgroundNoiseImage});
  background-repeat: repeat;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${LAYER_INDEXES.BACKGROUND_NOISE};
  width: 100%;
  height: 100%;
`;
