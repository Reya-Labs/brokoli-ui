import styled from '@emotion/styled';

import BackgroundNoiseImage from './assets/background-noise.png';

export const BackgroundNoise = styled('div')`
  background-image: url(${BackgroundNoiseImage});
  background-repeat: repeat;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;
