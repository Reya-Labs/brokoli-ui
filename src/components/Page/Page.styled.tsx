import styled from '@emotion/styled';

import BackgroundNoiseImage from './assets/background-noise.png';

export const PageBox = styled('div')`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const PageContentBox = styled('div')`
  z-index: ${({ theme }) => theme.layerIndexes.pageContent};
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundBox = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${({ theme }) => theme.layerIndexes.background};
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.gradients.background};
`;

export const BackgroundNoiseBox = styled('div')`
  background-image: url(${BackgroundNoiseImage});
  background-repeat: repeat;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: ${({ theme }) => theme.layerIndexes.backgroundNoise};
  width: 100%;
  height: 100%;
`;
