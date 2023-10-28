import styled from '@emotion/styled';

import { gradients } from '../../foundation/Gradients';
import { layerIndexes } from '../../foundation/LayerIndexes';
import BackgroundNoiseImage from './assets/background-noise.png';

export const PageBox = styled('div')`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const PageContentBox = styled('div')`
  z-index: ${layerIndexes.pageContent};
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundBox = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${layerIndexes.background};
  width: 100%;
  height: 100%;
  background: ${gradients.background};
`;

export const BackgroundNoiseBox = styled('div')`
  background-image: url(${BackgroundNoiseImage});
  background-repeat: repeat;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${layerIndexes.backgroundNoise};
  width: 100%;
  height: 100%;
`;
